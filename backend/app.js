const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");

const connectDb = require("./config/dbConfig");

const holdingsRoutes = require("./routes/holdingsRoutes");
const positionsRoutes = require("./routes/positionsRoutes");
const ordersRoutes = require("./routes/ordersRoutes");
const authRoutes = require("./routes/authRoutes");

app.use(
  cors({
    origin: [
      "https://zerodha-landing-p2.onrender.com",
      "https://dashboard-zerodha-p2.onrender.com",
    ],
  }),
);
app.use(bodyParser.json());

app.use("/", holdingsRoutes);
app.use("/", positionsRoutes);
app.use("/order", ordersRoutes);
app.use("/", authRoutes);

const port = process.env.PORT || 3000;

connectDb();
app.listen(port, () => console.log(`App is running on port ${port}`));
