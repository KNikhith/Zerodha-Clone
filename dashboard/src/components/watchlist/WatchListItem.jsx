import { useState } from "react";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";

import WatchListActions from "./WatchListActions";

const WatchListItem = ({ stock }) => {
  const [showActions, setShowActions] = useState(false);

  return (
    <li
      className="watchlist-item"
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <div className="stock-details">
        <div className="stock-left">
          <h4
            className={
              stock.isDown ? "stock-name down" : "stock-name up"
            }
          >
            {stock.name}
          </h4>

          <span className="exchange">
            NSE
          </span>
        </div>

        <div className="stock-right">
          <div className="change-container">
            <span
              className={
                stock.isDown ? "down" : "up"
              }
            >
              {stock.percent}
            </span>

            {stock.isDown ? (
              <KeyboardArrowDown
                fontSize="small"
                className="down"
              />
            ) : (
              <KeyboardArrowUp
                fontSize="small"
                className="up"
              />
            )}
          </div>

          <span className="stock-price">
            ₹{Number(stock.price).toFixed(2)}
          </span>
        </div>
      </div>

      <div
        className={`watchlist-actions-wrapper ${
          showActions ? "show" : ""
        }`}
      >
        <WatchListActions uid={stock.name} />
      </div>
    </li>
  );
};

export default WatchListItem;