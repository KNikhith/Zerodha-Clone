import apiClient from "./apiClient";
//import { watchlist } from "../data/data";

export const getWatchlist = async () => {
  try {
    const { data } = await apiClient.get(
      "/watchlist"
    );

    return data;
  } catch (error) {
    console.warn(
      "Backend watchlist unavailable. Using local data."
    );

    return watchlist;
  }
};

export const addToWatchlist = async (
  stock
) => {
  const { data } = await apiClient.post(
    "/watchlist",
    stock
  );

  return data;
};

export const removeFromWatchlist = async (
  id
) => {
  const { data } = await apiClient.delete(
    `/watchlist/${id}`
  );

  return data;
};