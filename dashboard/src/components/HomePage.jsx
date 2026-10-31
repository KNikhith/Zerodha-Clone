import { useEffect, useState } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { API_BASE_URL, LANDING_BASE_URL } from "../api";

function HomePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromUrl = urlParams.get("token");

    if (tokenFromUrl) {
      localStorage.setItem("token", tokenFromUrl);
      window.history.replaceState({}, document.title, "/");
    }

    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = `${LANDING_BASE_URL}/login`;
      return;
    }

    axios
      .get(`${API_BASE_URL}/dashboard`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setUser(response.data.user))
      .catch(() => {
        localStorage.removeItem("token");
        window.location.href = `${LANDING_BASE_URL}/login`;
      });

    // Reload the page when the tab becomes visible (Helpful in Logout case when multiple tabs are open)
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        window.location.reload();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  return (
    <>
      <TopBar user={user} />
      <Dashboard user={user} />
    </>
  );
}

export default HomePage;
