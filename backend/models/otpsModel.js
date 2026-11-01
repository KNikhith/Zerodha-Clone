const otpsSchema = require("../schemas/otpsSchema");
const { model } = require("mongoose");

const otpsModel = model("otp", otpsSchema);

module.exports = otpsModel;
