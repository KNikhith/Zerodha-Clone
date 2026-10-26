import Watchlist from "../models/Watchlist.js";

export const getUserWatchlist = async (userId) => {
  return await Watchlist.find({
    user: userId,
  });
};

export const addStock = async (userId, stock) => {
  return await Watchlist.create({
    ...stock,
    user: userId,
  });
};

export const removeStock = async (userId, stockId) => {
  return await Watchlist.findOneAndDelete({
    _id: stockId,
    user: userId,
  });
};