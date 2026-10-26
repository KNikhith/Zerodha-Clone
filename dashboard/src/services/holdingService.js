import apiClient from "./apiClient";

export const getAllHoldings = async () => {
  const { data } = await apiClient.get("/allHoldings");

  return data;
};

export const getHoldingById = async (id) => {
  const { data } = await apiClient.get(
    `/holdings/${id}`
  );

  return data;
};

export const refreshHoldings = async () => {
  const { data } = await apiClient.get(
    "/holdings/refresh"
  );

  return data;
};