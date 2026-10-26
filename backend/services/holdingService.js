import Holding from "../models/Holding.js";

export const getUserHoldings = async (userId) => {
  return await Holding.find({
    user: userId,
  });
};

export const getHoldingSummary = async (userId) => {
  const holdings = await Holding.find({
    user: userId,
  });

  let totalInvestment = 0;
  let currentValue = 0;

  holdings.forEach((stock) => {
    totalInvestment += stock.avg * stock.qty;
    currentValue += stock.price * stock.qty;
  });

  return {
    holdings,
    summary: {
      totalInvestment,
      currentValue,
      totalPnL: currentValue - totalInvestment,
    },
  };
};