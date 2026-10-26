import Holding from "../models/Holding.js";
import Position from "../models/Position.js";
import Order from "../models/Order.js";
import Watchlist from "../models/Watchlist.js";

export const getDashboardData = async (userId) => {
  const [holdings, positions, orders, watchlist] = await Promise.all([
    Holding.find({ user: userId }).populate("stock"),
    Position.find({ user: userId }).populate("stock"),
    Order.find({ user: userId })
      .populate("stock")
      .sort({ createdAt: -1 })
      .limit(10),
    Watchlist.find({ user: userId }).populate("stock"),
  ]);

  let investment = 0;
  let currentValue = 0;

  const formattedHoldings = holdings.map((holding) => {
    const stock = holding.stock;

    const invested = holding.avg * holding.qty;
    const value = holding.price * holding.qty;

    investment += invested;
    currentValue += value;

    return {
      _id: holding._id,
      stockId: stock?._id,
      symbol: stock?.symbol,
      company: stock?.name,
      exchange: stock?.exchange,
      qty: holding.qty,
      avg: holding.avg,
      price: holding.price,
      invested,
      currentValue: value,
      pnl: value - invested,
      change: stock?.change,
      percent: stock?.percent,
      isDown: stock?.isDown,
    };
  });

  const formattedPositions = positions.map((position) => ({
    _id: position._id,
    stockId: position.stock?._id,
    symbol: position.stock?.symbol,
    company: position.stock?.name,
    exchange: position.stock?.exchange,
    qty: position.qty,
    avg: position.avg,
    price: position.price,
    product: position.product,
    day: position.day,
    isLoss: position.isLoss,
  }));

  const formattedOrders = orders.map((order) => ({
    _id: order._id,
    stockId: order.stock?._id,
    symbol: order.stock?.symbol,
    company: order.stock?.name,
    exchange: order.stock?.exchange,
    qty: order.qty,
    price: order.price,
    mode: order.mode,
    status: order.status,
    createdAt: order.createdAt,
  }));

  const formattedWatchlist = watchlist.map((item) => ({
    _id: item._id,
    stockId: item.stock?._id,
    symbol: item.stock?.symbol,
    company: item.stock?.name,
    exchange: item.stock?.exchange,
    price: item.stock?.price,
    change: item.stock?.change,
    percent: item.stock?.percent,
    isDown: item.stock?.isDown,
  }));

  return {
    holdings: formattedHoldings,
    positions: formattedPositions,
    orders: formattedOrders,
    watchlist: formattedWatchlist,
    summary: {
      investment,
      currentValue,
      pnl: currentValue - investment,
    },
  };
};