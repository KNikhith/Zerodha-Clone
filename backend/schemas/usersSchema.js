const { Schema } = require("mongoose");
const bcrypt = require("bcrypt");

const usersSchema = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isVerified: { type: Boolean, default: false }, // OTP verified or not
  },
  { timestamps: true },
); // createdAt, updatedAt

// Hash password before saving
usersSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = usersSchema;
