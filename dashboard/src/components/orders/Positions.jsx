import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { getAllPositions } from "../../services/positionService";

const Positions = () => {
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPositions();
  }, []);

  const fetchPositions = async () => {
    try {
      setLoading(true);

      const data = await getAllPositions();

      setPositions(data);
    } catch (error) {
      console.error(error);
      toast.error("Unable to load positions.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="page-loader">Loading Positions...</div>;
  }

  return (
    <section className="page">
      <div className="page-header">
        <h2>Positions</h2>
        <span>{positions.length} Active</span>
      </div>

      <div className="table-card">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty</th>
              <th>Avg</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Day</th>
            </tr>
          </thead>

          <tbody>
            {positions.map((stock) => {
              const pnl =
                stock.price * stock.qty -
                stock.avg * stock.qty;

              return (
                <tr key={stock._id || stock.name}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>₹{stock.avg.toFixed(2)}</td>
                  <td>₹{stock.price.toFixed(2)}</td>

                  <td
                    className={
                      pnl >= 0 ? "profit" : "loss"
                    }
                  >
                    ₹{pnl.toFixed(2)}
                  </td>

                  <td
                    className={
                      stock.isLoss
                        ? "loss"
                        : "profit"
                    }
                  >
                    {stock.day}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Positions;