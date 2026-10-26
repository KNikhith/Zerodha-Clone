import express from "express";
import {protect} from "../middleware/authMiddleware.js";
import {
  getPositions,
  closePosition,
} from "../controllers/positionController.js";

const router = express.Router();

router.get("/", protect, getPositions);

router.post("/:id/close", protect, closePosition);

export default router; 