import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { VerticalGraph } from "../charts/VerticalGraph";
import { getAllHoldings } from "../../services/holdingService";

const Holdings = () => {
  const [holdings, setHoldings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHoldings();
  }, []);

  const fetchHoldings = async () => {
    try {
      setLoading(true);

      const data = await getAllHoldings();

      setHoldings(data);
    } catch (error) {
      console.error(error);
      toast.error("Unable to load holdings.");
    } finally {
      setLoading(false);
    }
  };

  const chartData = {
    labels: holdings.map((item) => item.name),

    datasets: [
      {
        label: "Price",
        data: holdings.map((item) => item.price),
        backgroundColor: "#387ED1",
      },
    ],
  };

  if (loading) {
    return <div className="page-loader">Loading Holdings...</div>;
  }

  return (
    <section className="page">
      <div className="page-header">
        <h2>Holdings</h2>

        <span>{holdings.length} Stocks</span>
      </div>

      <div className="table-card">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty</th>
              <th>Avg</th>
              <th>LTP</th>
              <th>Current</th>
              <th>P&L</th>
            </tr>
          </thead>

          <tbody>
            {holdings.map((stock) => {
              const current =
                stock.qty * stock.price;

              const pnl =
                current - stock.avg * stock.qty;

              return (
                <tr key={stock._id || stock.name}>
                  <td>{stock.name}</td>

                  <td>{stock.qty}</td>

                  <td>₹{stock.avg.toFixed(2)}</td>

                  <td>₹{stock.price.toFixed(2)}</td>

                  <td>₹{current.toFixed(2)}</td>

                  <td
                    className={
                      pnl >= 0 ? "profit" : "loss"
                    }
                  >
                    ₹{pnl.toFixed(2)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="chart-card">
        <VerticalGraph data={chartData} />
      </div>
    </section>
  );
};

export default Holdings;