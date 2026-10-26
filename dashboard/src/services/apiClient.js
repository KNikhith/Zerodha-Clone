import axios from "axios";
import API from "../config/api";

const apiClient = axios.create({
  baseURL: API.BASE_URL,
  // withCredentials: true,
  // headers: {
  //   "Content-Type": "application/json",
  // },
});
console.log("API Base URL:", API.BASE_URL); // Log the base URL to verify it's set correctly

export default apiClient;