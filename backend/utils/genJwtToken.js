const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  const payload = {
    id: user._id,
    email: user.email,
    fullName: user.fullName,
  };

  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" });
};

module.exports = generateToken;
