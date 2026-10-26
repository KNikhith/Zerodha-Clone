import mongoose from "mongoose";
import dotenv from "dotenv";
import Stock from "../models/Stock.js";
import {stocks} from "./stocks.js";

dotenv.config();

const seedStocks = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");

    await Stock.deleteMany({});
    await Stock.insertMany(stocks);

    console.log(`${stocks.length} stocks inserted successfully`);

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedStocks();