import Watchlist from "../models/Watchlist.js";
import Stock from "../models/Stock.js";

export const getWatchlist = async (req, res) => {
  try {
    const watchlist = await Watchlist.find({
      user: req.user._id,
    }).populate("stock");

    const stocks = watchlist.map((item) => ({
      _id: item._id,
      stockId: item.stock._id,
      name: item.stock.name,
      symbol: item.stock.symbol,
      price: item.stock.price,
      percent: item.stock.percent,
      isDown: item.stock.isDown,
    }));

    res.status(200).json({
      success: true,
      watchlist: stocks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const addToWatchlist = async (req, res) => {
  try {
    const { stockId } = req.body;

    const stock = await Stock.findById(stockId);

    if (!stock) {
      return res.status(404).json({
        success: false,
        message: "Stock not found",
      });
    }

    const exists = await Watchlist.findOne({
      user: req.user._id,
      stock: stockId,
    });

    if (exists) {
      return res.status(400).json({
        success: false,
        message: "Stock already exists",
      });
    }

    await Watchlist.create({
      user: req.user._id,
      stock: stockId,
    });

    res.status(201).json({
      success: true,
      message: "Added to watchlist",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteWatchlist = async (req, res) => {
  try {
    await Watchlist.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });

    res.status(200).json({
      success: true,
      message: "Removed from watchlist",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const removeFromWatchlist = async (req, res) => {
  try {
    await Watchlist.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Stock removed from watchlist",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};