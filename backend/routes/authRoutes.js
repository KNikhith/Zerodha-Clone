const router = require("express").Router();
const {
  sendOtp,
  verifyOtp,
  signup,
  login,
  logout,
} = require("../controllers/authControllers");
const authenticateUser = require("../middlewares/validateUser");

router.post("/send-otp", sendOtp);
router.post("/verify-otp", verifyOtp);
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/dashboard", authenticateUser, (req, res) => {
  res.json({ message: "Welcome to Dashboard", user: req.user });
});

module.exports = router;
