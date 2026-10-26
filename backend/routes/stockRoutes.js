import express from "express";
import {
  getStocks,
  searchStocks,
  getStockById,
} from "../controllers/stockController.js";

const router = express.Router();

router.get("/", getStocks);

router.get("/search", searchStocks);

router.get("/:id", getStockById);

export default router;