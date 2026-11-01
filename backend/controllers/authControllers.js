const usersModel = require("../models/usersModel");
const otpsModel = require("../models/otpsModel");
const bcrypt = require("bcrypt");
const sendEmail = require("../utils/sendEmail");
const generateToken = require("../utils/genJwtToken");

// Generate 6-digit OTP
const generateOTP = () =>
  Math.floor(100000 + Math.random() * 900000).toString();

// Signup Step 1: Send OTP
const sendOtp = async (req, res) => {
  const { email } = req.body;

  try {
    let user = await usersModel.findOne({ email });
    if (user && user.isVerified) {
      return res.status(400).json({ message: "This email is already exists." });
    }

    const otp = generateOTP();
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes validity

    await otpsModel.findOneAndUpdate(
      { email },
      { otp, expiresAt },
      { upsert: true, new: true },
    );

    const otpMessage = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Verification</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 500px;
            margin: 20px auto;
            background: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            font-size: 22px;
            color: #333;
            font-weight: bold;
        }
        .otp-box {
            text-align: center;
            font-size: 24px;
            font-weight: bold;
            color: #007bff;
            background: #e9f5ff;
            padding: 10px;
            margin: 0 auto;
            border-radius: 5px;
        }
        .message {
            font-size: 16px;
            color: #555;
            text-align: center;
            margin: 15px 0;
        }
        .footer {
            text-align: center;
            font-size: 12px;
            color: #999;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">Verify Your Email</div>
        <p class="message">Use the OTP below to verify your email address.</p>
        <div class="otp-box">${otp}</div>
        <p class="message">This OTP will expire in 5 minutes.</p>
        <p class="footer">If you didn’t request this, please ignore this email.</p>
    </div>
</body>
</html>`;

    await sendEmail(email, otpMessage);

    res.status(200).json({ message: "OTP sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Signup Step 2: Verify OTP
const verifyOtp = async (req, res) => {
  const { email, otp } = req.body;

  try {
    const otpRecord = await otpsModel.findOne({ email, otp });

    if (!otpRecord || otpRecord.expiresAt < new Date()) {
      return res.status(400).json({ message: "Invalid or expired OTP." });
    }

    await otpsModel.deleteOne({ email });

    res.status(200).json({ message: "OTP verified successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Signup Step 3: Register user
const signup = async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    let user = await usersModel.findOne({ email });

    if (!user) {
      user = new usersModel({ fullName, email, password, isVerified: true });
      await user.save();
    }

    res.status(201).json({ message: "Signup successful. You can now log in." });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Login User
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await usersModel.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "This email is not registered!" });

    const isPassMatch = await bcrypt.compare(password, user.password);
    if (!isPassMatch)
      return res.status(400).json({ message: "Wrong password!" });

    // Generate JWT token
    const token = generateToken(user);

    res.status(200).json({ message: "Login successful", token: token });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Logout User
const logout = (req, res) => {
  try {
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { sendOtp, verifyOtp, signup, login, logout };
