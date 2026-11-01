const positionsModel = require("../models/positionsModel");

const getAllPositions = async (req, res) => {
  try {
    let allPositions = await positionsModel.find({});
    res.status(200).json(allPositions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getAllPositions };
