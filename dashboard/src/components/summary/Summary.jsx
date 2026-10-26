import { useEffect, useState } from "react";
import { getAllStocks } from "../../services/stockService";
import StockTable from "./StockTable";
const Summary = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchStocks = async () => {
      console.log("fetchStocks called");
      try {
        const data = await getAllStocks();
        setStocks(data.stocks || data);
      } catch (error) {
        console.error("Error fetching stocks:", error);
      }
    };

    fetchStocks();
  }, []);

  return (
    <section className="summary-page">
      <div className="page-header">
        <h2>Dashboard</h2>
        <p>Welcome back 👋</p>
      </div>

      <div className="summary-grid">
        <div className="summary-card">
          <span>Available Margin</span>
          <h2>₹3,740</h2>
          <small>Equity</small>
        </div>

        <div className="summary-card">
          <span>Current Value</span>
          <h2>₹31,428</h2>
          <small>Portfolio</small>
        </div>

        <div className="summary-card profit-card">
          <span>Total P&amp;L</span>
          <h2>+₹1,553</h2>
          <small>+5.20%</small>
        </div>
      </div>
      <StockTable stocks={stocks} />
    </section>
  );
};

export default Summary;