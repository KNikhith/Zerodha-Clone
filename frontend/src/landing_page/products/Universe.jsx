import { Link } from "react-router-dom";
import "./Products.css";

const partners = [
  {
    image: "/images/smallcaseLogo.png",
    description:
      "Thematic investing platform helping you invest in diversified baskets of stocks and ETFs.",
  },
  {
    image: "/images/zerodhaFundhouse.png",
    description:
      "Simple and transparent index funds built for long-term investing.",
  },
  {
    image: "/images/sensibullLogo.svg",
    description:
      "India's largest options trading platform for strategy building and analysis.",
  },
  {
    image: "/images/dittoLogo.png",
    description:
      "Personalized guidance on life and health insurance without spam.",
  },
  {
    image: "/images/streakLogo.png",
    description:
      "Create, test and deploy trading strategies without writing code.",
  },
  {
    image: "/images/tijori.svg",
    description:
      "Investment research platform offering deep insights into companies and sectors.",
  },
];

function Universe() {
  return (
    <section className="universe-section">

      <div className="container">

        <div className="text-center mb-5">

          <h2 className="section-title">
            The Zerodha Universe
          </h2>

          <p className="section-description">
            Extend your investing experience with our trusted ecosystem partners.
          </p>

        </div>

        <div className="row g-4">

          {partners.map((partner) => (
            <div
              className="col-lg-4 col-md-6"
              key={partner.image}
            >
              <div className="partner-card">

                <img
                  src={partner.image}
                  alt="Partner"
                  className="partner-logo"
                  loading="lazy"
                />

                <p>
                  {partner.description}
                </p>

              </div>
            </div>
          ))}

        </div>

        <div className="text-center mt-5">

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

export default Universe;