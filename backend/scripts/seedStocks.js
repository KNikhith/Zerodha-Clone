import fs from "fs";
import path from "path";
import dotenv from "dotenv";

import connectDB from "../config/db.js";
import Stock from "../models/Stock.js";

dotenv.config();

const seedStocks = async () => {
  try {
    await connectDB();

    const filePath = path.join(process.cwd(), "data", "stocks.json");

    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    await Stock.deleteMany();

    await Stock.insertMany(data);

    console.log(`${data.length} stocks inserted successfully`);

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

seedStocks();