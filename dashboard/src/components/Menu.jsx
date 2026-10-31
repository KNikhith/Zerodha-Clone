import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL, LANDING_BASE_URL } from "../api";

function Menu({ user }) {
  const [selectedMenu, setSelectedMenu] = useState(0);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleLogout = async () => {
    try {
      await axios.post(`${API_BASE_URL}/logout`, {});
      localStorage.removeItem("token");
      window.location.href = `${LANDING_BASE_URL}/`;
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="menu-container">
      <img src="/logo.png" style={{ width: "40px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link to="/" onClick={() => handleMenuClick(0)}>
              <p className={selectedMenu === 0 ? "menu selected" : "menu"}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link to="/orders" onClick={() => handleMenuClick(1)}>
              <p className={selectedMenu === 1 ? "menu selected" : "menu"}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link to="/holdings" onClick={() => handleMenuClick(2)}>
              <p className={selectedMenu === 2 ? "menu selected" : "menu"}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link to="/positions" onClick={() => handleMenuClick(3)}>
              <p className={selectedMenu === 3 ? "menu selected" : "menu"}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link to="/funds" onClick={() => handleMenuClick(4)}>
              <p className={selectedMenu === 4 ? "menu selected" : "menu"}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link to="/apps" onClick={() => handleMenuClick(5)}>
              <p className={selectedMenu === 5 ? "menu selected" : "menu"}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="dropdown profile">
          <div
            className="avatar"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {user ? user.fullName.charAt(0).toUpperCase() : "ZU"}
          </div>
          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <div className="profile">
                <span className="dropdown-item ms-4 avatar">
                  {user ? user.fullName.charAt(0).toUpperCase() : "ZU"}
                </span>
              </div>
            </li>
            <li>
              <span className="dropdown-item small disabled ms-4">
                {user ? user.fullName : "Zerodha User"}
              </span>
            </li>
            <li>
              <button
                className="dropdown-item small text-danger fw-semibold bg-transparent"
                onClick={handleLogout}
              >
                <i className="fas fa-sign-out"></i>{" "}
                <span className="ms-2">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Menu;
