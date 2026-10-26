import { useContext } from "react";
import {
  Tooltip,
  Grow,
} from "@mui/material";

import {
  BarChartOutlined,
  MoreHoriz,
} from "@mui/icons-material";

import GeneralContext from "../context/GeneralContext";

const WatchListActions = ({ uid }) => {
  const { openBuyWindow } = useContext(GeneralContext);

  return (
    <div className="watchlist-actions">
      <Tooltip
        title="Buy (B)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button
          type="button"
          className="buy-btn"
          onClick={() => openBuyWindow(uid)}
        >
          Buy
        </button>
      </Tooltip>

      <Tooltip
        title="Sell (S)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button
          type="button"
          className="sell-btn"
        >
          Sell
        </button>
      </Tooltip>

      <Tooltip
        title="Analytics (A)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button
          type="button"
          className="icon-btn"
        >
          <BarChartOutlined fontSize="small" />
        </button>
      </Tooltip>

      <Tooltip
        title="More"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button
          type="button"
          className="icon-btn"
        >
          <MoreHoriz fontSize="small" />
        </button>
      </Tooltip>
    </div>
  );
};

export default WatchListActions;