import { Link } from "react-router-dom";
import "./Home.css";

const pricingCards = [
  {
    price: "₹0",
    description: "Free equity delivery and direct mutual funds",
  },
  {
    price: "₹20",
    description: "Intraday and F&O trades",
  },
];

function Pricing() {
  return (
    <section className="section-padding">
      <div className="container">

        <div className="row align-items-center gy-5">

          <div className="col-lg-5">

            <h2 className="section-title">
              Unbeatable pricing
            </h2>

            <p className="section-description">
              We pioneered discount broking and transparent pricing in India.
              Flat fees and absolutely no hidden charges.
            </p>

            <Link to="/pricing" className="section-link">
              See Pricing
              <i className="fa-solid fa-arrow-right-long ms-2"></i>
            </Link>

          </div>

          <div className="col-lg-7">

            <div className="row g-4">

              {pricingCards.map((card) => (
                <div className="col-md-6" key={card.price}>
                  <div className="pricing-card text-center">

                    <h2>{card.price}</h2>

                    <p>{card.description}</p>

                  </div>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Pricing;