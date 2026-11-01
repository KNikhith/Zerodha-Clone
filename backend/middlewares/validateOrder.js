const holdingsModel = require("../models/holdingsModel");

const validateBuyOrder = (req, res, next) => {
  const { name, qty, price, mode } = req.body;

  if (!name || !qty || !price || mode !== "BUY") {
    return res.status(400).json({ error: "All fields are required!" });
  }
  if (qty <= 0 || price <= 0) {
    return res
      .status(400)
      .json({ error: "Quantity and price must be greater than zero!" });
  }

  next();
};

const validateSellOrder = async (req, res, next) => {
  const { name, qty, price, mode } = req.body;

  if (!name || !qty || !price || mode !== "SELL") {
    return res
      .status(400)
      .json({
        error:
          "Invalid order details. Ensure name, quantity, and price are valid.",
      });
  }
  if (qty <= 0 || price <= 0) {
    return res
      .status(400)
      .json({ error: "Quantity and price must be greater than zero!" });
  }

  const holding = await holdingsModel.findOne({ name });
  if (!holding) {
    return res
      .status(404)
      .json({ error: `No holding found for name: ${name}` });
  }
  if (holding.qty < qty || holding.price < price) {
    return res.status(400).json({
      error: `Insufficient quantity/price. Available quantity: ${holding.qty}, Attempted quantity: ${qty}, Available price: ${holding.price}, Attempted price: ${price}`,
    });
  }

  req.holding = holding; // Pass the holding data to the next handler
  next();
};

module.exports = { validateBuyOrder, validateSellOrder };
