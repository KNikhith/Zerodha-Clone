const API = {
  BASE_URL: import.meta.env.VITE_API_URL,
};
console.log("BASE_URL from API config:", import.meta.env.VITE_API_URL); // Log the base URL to verify it's set correctly
export default API;