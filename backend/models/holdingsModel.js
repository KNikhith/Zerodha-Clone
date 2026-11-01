const { model } = require("mongoose");
const holdingsSchema = require("../schemas/holdingsSchema");

const holdingsModel = model("holding", holdingsSchema);

module.exports = holdingsModel;
