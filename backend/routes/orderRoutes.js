import express from "express";
import {protect} from "../middleware/authMiddleware.js";
import {
  getOrders,
  createOrder,
  deleteOrder,
} from "../controllers/orderController.js";

const router = express.Router();

router.get("/", protect, getOrders);

router.post("/", protect, createOrder);

router.delete("/:id", protect, deleteOrder);

export default router;