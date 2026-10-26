import apiClient from "./apiClient";

export const placeOrder = async (orderData) => {
  const { data } = await apiClient.post(
    "/newOrder",
    orderData
  );

  return data;
};

export const getOrders = async () => {
  const { data } = await apiClient.get(
    "/orders"
  );

  return data;
};

export const cancelOrder = async (orderId) => {
  const { data } = await apiClient.delete(
    `/orders/${orderId}`
  );

  return data;
};