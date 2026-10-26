import { ReceiptLong } from "@mui/icons-material";

const Orders = () => {
  return (
    <section className="empty-page">
      <ReceiptLong
        sx={{
          fontSize: 80,
          color: "#c4c4c4",
        }}
      />

      <h2>No Orders Yet</h2>

      <p>
        You haven't placed any orders today.
      </p>

      <button className="primary-btn">
        Place Order
      </button>
    </section>
  );
};

export default Orders;