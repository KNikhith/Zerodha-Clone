import { NavLink } from "react-router-dom";
import {
  Apps,
  AccountCircle,
} from "@mui/icons-material";

const Menu = () => {
  return (
    <nav className="dashboard-menu">
      <div className="dashboard-logo">
        <img
          src="/logo.png"
          alt="Zerodha"
        />
      </div>

      <ul className="dashboard-links">
        <li>
          <NavLink to="/">
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to="/orders">
            Orders
          </NavLink>
        </li>

        <li>
          <NavLink to="/holdings">
            Holdings
          </NavLink>
        </li>

        <li>
          <NavLink to="/positions">
            Positions
          </NavLink>
        </li>

        <li>
          <NavLink to="/funds">
            Funds
          </NavLink>
        </li>

        <li>
          <NavLink to="/apps">
            <Apps fontSize="small" />
          </NavLink>
        </li>
      </ul>

      <div className="profile-section">
        <AccountCircle />

        <div>
          <h4>Nikhith</h4>
          <span>Client ID</span>
        </div>
      </div>
    </nav>
  );
};

export default Menu;