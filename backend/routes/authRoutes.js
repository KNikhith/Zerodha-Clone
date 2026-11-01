import express from "express";
import {
  signup,
  login,
  logout,
  getMe,
  verifyUser,
} from "../controllers/authControllers.js";

import {protect} from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.get("/me", protect, getMe);

router.get("/verify", protect, verifyUser);

export default router;