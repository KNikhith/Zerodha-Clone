const usersSchema = require("../schemas/usersSchema");
const { model } = require("mongoose");

const usersModel = model("user", usersSchema);

module.exports = usersModel;
