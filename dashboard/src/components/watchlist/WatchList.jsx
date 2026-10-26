import { useEffect, useMemo, useState } from "react";
import { getWatchlist } from "../../services/watchlistService";
import { DoughnutChart } from "../charts/DoughnutChart";
import WatchListItem from "./WatchListItem";

import "./WatchList.css";

const WatchList = () => {
  const [watchlist, setWatchlist] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchWatchlist();
  }, []);

  const fetchWatchlist = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getWatchlist();

      setWatchlist(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      setError("Unable to load watchlist.");
    } finally {
      setLoading(false);
    }
  };

  const filteredStocks = useMemo(() => {
    if (!searchTerm.trim()) return watchlist;

    return watchlist.filter((stock) =>
      stock.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [watchlist, searchTerm]);

  const chartData = useMemo(
    () => ({
      labels: filteredStocks.map((stock) => stock.name),
      datasets: [
        {
          label: "Price",
          data: filteredStocks.map((stock) => stock.price),
          backgroundColor: [
            "#387ED1",
            "#00B386",
            "#F9A825",
            "#8E24AA",
            "#EF5350",
            "#42A5F5",
            "#66BB6A",
            "#5C6BC0",
            "#EC407A",
          ],
          borderWidth: 0,
        },
      ],
    }),
    [filteredStocks]
  );

  return (
    <aside className="watchlist-container">
      <div className="watchlist-header">
        <h2>Watchlist</h2>

        <span>{filteredStocks.length} / 50</span>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search stocks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search"
          aria-label="Search Watchlist"
        />
      </div>

      {loading && (
        <div className="watchlist-message">
          Loading watchlist...
        </div>
      )}

      {!loading && error && (
        <div className="watchlist-error">
          {error}
        </div>
      )}

      {!loading && !error && (
        <>
          <ul className="watchlist-list">
            {filteredStocks.length === 0 ? (
              <li className="watchlist-empty">
                No stocks found.
              </li>
            ) : (
              filteredStocks.map((stock) => (
                <WatchListItem
                  key={stock.name}
                  stock={stock}
                />
              ))
            )}
          </ul>

          <div className="watchlist-chart">
            <DoughnutChart data={chartData} />
          </div>
        </>
      )}
    </aside>
  );
};

export default WatchList;