import axios from "axios";
import API_BASE_URL from "../config/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

export const loginUser = (credentials) =>
  api.post("/login", credentials);

export const signupUser = (userData) =>
  api.post("/signup", userData);

export default api;