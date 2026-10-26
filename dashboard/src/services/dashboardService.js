import apiClient from "./apiClient";

/**
 * Dashboard API
 * Backend Route:
 * GET /api/dashboard
 */
export const getDashboard = async () => {
  const { data } = await apiClient.get("/dashboard");
  return data;
};

/**
 * Dashboard Summary
 */
export const getDashboardSummary = async () => {
  const data = await getDashboard();
  return data.summary;
};

/**
 * Holdings
 */
export const getHoldings = async () => {
  const data = await getDashboard();
  return data.holdings;
};

/**
 * Positions
 */
export const getPositions = async () => {
  const data = await getDashboard();
  return data.positions;
};

/**
 * Orders
 */
export const getOrders = async () => {
  const data = await getDashboard();
  return data.orders;
};

/**
 * Watchlist
 */
export const getWatchlist = async () => {
  const data = await getDashboard();
  return data.watchlist;
};