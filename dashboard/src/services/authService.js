import apiClient from "./apiClient";

export const getCurrentUser = async () => {
  const { data } = await apiClient.get(
    "/me"
  );

  return data;
};

export const logoutUser = async () => {
  const { data } = await apiClient.post(
    "/logout"
  );

  return data;
};

export const verifyAuth = async () => {
  const { data } = await apiClient.get(
    "/verify"
  );

  return data;
};