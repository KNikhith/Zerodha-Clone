import apiClient from "./apiClient";

export const getAllPositions = async () => {
  const { data } = await apiClient.get(
    "/allPositions"
  );

  return data;
};

export const getPositionById = async (id) => {
  const { data } = await apiClient.get(
    `/positions/${id}`
  );

  return data;
};

export const closePosition = async (id) => {
  const { data } = await apiClient.post(
    `/positions/${id}/close`
  );

  return data;
};