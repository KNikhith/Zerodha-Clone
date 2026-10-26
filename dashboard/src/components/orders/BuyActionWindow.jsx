import { useState } from "react";
import toast from "react-hot-toast";

import { placeOrder } from "../../services/orderService";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);

  const total =
    (Number(quantity) || 0) * (Number(price) || 0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!quantity || quantity <= 0) {
      toast.error("Please enter a valid quantity.");
      return;
    }

    if (!price || price <= 0) {
      toast.error("Please enter a valid price.");
      return;
    }

    try {
      setLoading(true);

      await placeOrder({
        name: uid,
        qty: Number(quantity),
        price: Number(price),
        mode: "BUY",
      });

      toast.success("Order placed successfully.");

      onClose();
    } catch (error) {
      console.error(error);
      toast.error("Failed to place order.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="buy-overlay">
      <div className="buy-modal">
        <div className="buy-header">
          <h2>Buy {uid}</h2>

          <button
            className="close-btn"
            type="button"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <form
          className="buy-form"
          onSubmit={handleSubmit}
        >
          <div className="input-group">
            <label htmlFor="quantity">
              Quantity
            </label>

            <input
              id="quantity"
              type="number"
              min="1"
              value={quantity}
              onChange={(e) =>
                setQuantity(e.target.value)
              }
            />
          </div>

          <div className="input-group">
            <label htmlFor="price">
              Price
            </label>

            <input
              id="price"
              type="number"
              step="0.05"
              min="0"
              value={price}
              onChange={(e) =>
                setPrice(e.target.value)
              }
            />
          </div>

          <div className="order-summary">
            <div className="summary-row">
              <span>Estimated Value</span>

              <strong>
                ₹{total.toFixed(2)}
              </strong>
            </div>

            <div className="summary-row">
              <span>Margin Required</span>

              <strong>
                ₹{total.toFixed(2)}
              </strong>
            </div>
          </div>

          <div className="modal-actions">
            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="submit-btn"
              disabled={loading}
            >
              {loading ? "Placing..." : "Buy Stock"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BuyActionWindow;