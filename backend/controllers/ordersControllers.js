const ordersModel = require("../models/ordersModel");
const holdingsModel = require("../models/holdingsModel");

const placeBuyOrder = async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    const existingHolding = await holdingsModel.findOne({ name });

    const buyOrder = new ordersModel({
      name,
      qty,
      price,
      mode,
    });
    await buyOrder.save();

    if (existingHolding) {
      const exQty = Number(existingHolding.qty);
      const exAvg = Number(existingHolding.avg);
      const totalQty = exQty + qty;
      const newAvgPrice = (exAvg * exQty + price * qty) / totalQty;
      await holdingsModel.findOneAndUpdate(
        { name },
        { $inc: { qty: qty, price: price }, avg: newAvgPrice },
      );
      res
        .status(200)
        .json({
          message: "Holding updated successfully!",
          holding: existingHolding,
          order: buyOrder,
        });
    } else {
      const avgPrice = price / qty;
      const initialNet = "+0.00%";
      const initialDay = "+0.00%";
      const newHolding = new holdingsModel({
        name,
        qty,
        avg: avgPrice,
        price,
        net: initialNet,
        day: initialDay,
      });
      await newHolding.save();

      res
        .status(200)
        .json({
          message: "Holding created successfully!",
          holding: newHolding,
          order: buyOrder,
        });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const placeSellOrder = async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    const existingHolding = req.holding;

    if (existingHolding.qty === qty && existingHolding.price === price) {
      await holdingsModel.deleteOne({ name });
      await ordersModel.create({ name, qty, price, mode });
      return res.status(200).json({
        message: "Order placed successfully! Holding sold completely.",
      });
    }
    if (existingHolding.qty >= qty && existingHolding.price >= price) {
      const remainingQty = existingHolding.qty - qty;
      const updatedAvgPrice =
        (existingHolding.qty * existingHolding.avg - qty * price) /
        remainingQty;

      existingHolding.qty = remainingQty;
      existingHolding.price -= price;
      existingHolding.avg = remainingQty > 0 ? updatedAvgPrice : 0;
      await existingHolding.save();

      if (remainingQty <= 0 || existingHolding.price - price <= 0) {
        await holdingsModel.deleteOne({ name });
      }

      // Log the sell order
      await ordersModel.create({ name, qty, price, mode });

      return res.status(200).json({
        message: "Order placed successfully! Holding updated.",
        updatedHolding: remainingQty > 0 ? existingHolding : null,
      });
    }

    return res.status(400).json({
      error:
        "Insufficient quantity or price. Please check your holdings and try again.",
    });
  } catch (err) {
    return res
      .status(500)
      .json({ error: `Internal Server Error: ${err.message}` });
  }
};

module.exports = { placeBuyOrder, placeSellOrder };
