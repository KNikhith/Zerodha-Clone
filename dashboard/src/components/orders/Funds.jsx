const Funds = () => {
  return (
    <section className="funds-page">
      <div className="page-header">
        <h2>Funds</h2>

        <div className="fund-actions">
          <button className="success-btn">
            Add Funds
          </button>

          <button className="primary-btn">
            Withdraw
          </button>
        </div>
      </div>

      <div className="fund-card">
        <h3>Available Margin</h3>

        <h1>₹4,043.10</h1>

        <div className="fund-grid">
          <div>
            <span>Used Margin</span>

            <strong>₹3,757.30</strong>
          </div>

          <div>
            <span>Available Cash</span>

            <strong>₹4,043.10</strong>
          </div>

          <div>
            <span>Opening Balance</span>

            <strong>₹3,736.40</strong>
          </div>

          <div>
            <span>Collateral</span>

            <strong>₹0.00</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Funds;