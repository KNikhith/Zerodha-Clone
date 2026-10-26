import { Routes, Route, Navigate } from "react-router-dom";

import { GeneralContextProvider } from "../context/GeneralContext";

import WatchList from "../watchlist/WatchList";

import Summary from "../summary/Summary";

import Holdings from "../holdings/Holdings";

import Positions from "../orders/Positions";

import Orders from "../orders/Orders";

import Funds from "../orders/Funds";

import Apps from "../Apps";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <aside className="dashboard-sidebar">
          <WatchList />
        </aside>

        <main className="dashboard-content">
          <Routes>
            <Route path="/" element={<Summary />} />

            <Route path="/holdings" element={<Holdings />} />

            <Route path="/positions" element={<Positions />} />

            <Route path="/orders" element={<Orders />} />

            <Route path="/funds" element={<Funds />} />

            <Route path="/apps" element={<Apps />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </GeneralContextProvider>
    </div>
  );
};

export default Dashboard;