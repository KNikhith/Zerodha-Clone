import axios from "axios";
import apiClient from "./apiClient";

export const getAllStocks = async () => {
  const req = await apiClient.get("/api/stocks");
  return req.data;
};

export const getStockById = async (id) => {
  const req = await apiClient.get(`/api/stocks/${id}`);
  return req.data;
};