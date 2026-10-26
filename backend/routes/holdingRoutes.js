import express from "express";
import {protect} from "../middleware/authMiddleware.js";
import {
  getHoldings,
  getHoldingById,
} from "../controllers/holdingController.js";

const router = express.Router();

router.get("/", protect, getHoldings);

router.get("/:id", protect, getHoldingById);

export default router;