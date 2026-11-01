const { model } = require("mongoose");
const positionsSchema = require("../schemas/positionsSchema");

const positionsModel = model("position", positionsSchema);

module.exports = positionsModel;