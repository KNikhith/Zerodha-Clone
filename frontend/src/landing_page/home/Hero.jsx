import { Link } from "react-router-dom";
import "./Home.css";

function Hero() {
  return (
    <section className="hero-section">
      <div className="container text-center">

        <img
          src="/images/homehero.png"
          alt="Zerodha Dashboard"
          className="hero-image"
          loading="lazy"
        />

        <h1 className="hero-title">
          Invest in everything
        </h1>

        <p className="hero-description">
          Online platform to invest in stocks, derivatives, mutual funds,
          ETFs, bonds, and more.
        </p>

        <Link
          to="/signup"
          className="btn btn-primary hero-btn"
        >
          Sign Up Now
        </Link>

      </div>
    </section>
  );
}

export default Hero;