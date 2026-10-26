import { Link } from "react-router-dom";
import "./home/Home.css";

function OpenAccount() {
  return (
    <section className="open-account-section">
      <div className="container">

        <div className="text-center">

          <h2 className="section-title">
            Invest in everything
          </h2>

          <p className="section-description open-account-text">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday
            and F&O trades.
          </p>

          <Link
            to="/signup"
            className="btn btn-primary hero-btn"
          >
            Sign Up Now
          </Link>

        </div>

      </div>
    </section>
  );
}

export default OpenAccount;