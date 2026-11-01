const holdingsModel = require("../models/holdingsModel");

const getAllHoldings = async (req, res) => {
  try {
    let allHoldings = await holdingsModel.find({});
    res.status(200).json(allHoldings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getAllHoldings };
