import Order from "../models/Order.js";
import Holding from "../models/Holding.js";
import Position from "../models/Position.js";

export const placeOrder = async (userId, data) => {
  const { name, qty, price, mode } = data;

  const order = await Order.create({
    user: userId,
    name,
    qty,
    price,
    mode,
  });

  let holding = await Holding.findOne({
    user: userId,
    name,
  });

  if (mode === "BUY") {
    if (holding) {
      const totalQty = holding.qty + Number(qty);

      const average =
        (holding.avg * holding.qty + price * qty) / totalQty;

      holding.qty = totalQty;
      holding.avg = Number(average.toFixed(2));
      holding.price = price;

      await holding.save();
    } else {
      await Holding.create({
        user: userId,
        name,
        qty,
        avg: price,
        price,
      });
    }

    await Position.create({
      user: userId,
      product: "CNC",
      name,
      qty,
      avg: price,
      price,
      day: "0%",
      isLoss: false,
    });
  }

  if (mode === "SELL" && holding) {
    holding.qty -= Number(qty);

    if (holding.qty <= 0) {
      await holding.deleteOne();
    } else {
      holding.price = price;
      await holding.save();
    }

    await Position.deleteMany({
      user: userId,
      name,
    });
  }

  return order;
};