const { Schema } = require("mongoose");

const otpsSchema = new Schema(
  {
    email: { type: String, required: true },
    otp: { type: String, required: true },
    expiresAt: { type: Date, expires: 5 * 60, required: true },
  },
  { timestamps: true },
);

module.exports = otpsSchema;
