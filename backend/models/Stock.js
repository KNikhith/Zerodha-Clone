import mongoose from "mongoose";

const stockSchema = new mongoose.Schema(
  {
    symbol: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    exchange: {
      type: String,
      default: "NSE",
    },

    sector: {
      type: String,
      required: true,
    },

    industry: {
      type: String,
      default: "",
    },

    price: {
      type: Number,
      required: true,
    },

    previousClose: {
      type: Number,
      default: 0,
    },

    open: Number,

    high: Number,

    low: Number,

    volume: {
      type: Number,
      default: 0,
    },

    marketCap: {
      type: Number,
      default: 0,
    },

    pe: {
      type: Number,
      default: 0,
    },

    eps: {
      type: Number,
      default: 0,
    },

    dividend: {
      type: Number,
      default: 0,
    },

    change: {
      type: Number,
      default: 0,
    },

    percent: {
      type: Number,
      default: 0,
    },

    isDown: {
      type: Boolean,
      default: false,
    },

    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Stock", stockSchema);