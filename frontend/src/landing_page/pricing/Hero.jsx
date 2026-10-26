import "./Pricing.css";

const pricingCards = [
  {
    image: "/images/pricingEquity.svg",
    title: "Free Equity Delivery",
    description:
      "All equity delivery investments (NSE & BSE) are completely free with zero brokerage.",
  },
  {
    image: "/images/intradayTrades.svg",
    title: "Intraday & F&O",
    description:
      "Flat ₹20 or 0.03% (whichever is lower) per executed order.",
  },
  {
    image: "/images/pricingEquity.svg",
    title: "Direct Mutual Funds",
    description:
      "Invest in direct mutual funds with zero commission and zero DP charges.",
  },
];

function Hero() {
  return (
    <section className="pricing-hero">

      <div className="container">

        <div className="text-center mb-5">

          <h1 className="section-title">
            Charges
          </h1>

          <p className="section-description">
            List of all charges and statutory taxes.
          </p>

        </div>

        <div className="row g-4">

          {pricingCards.map((card) => (

            <div
              className="col-lg-4"
              key={card.title}
            >
              <div className="pricing-card">

                <img
                  src={card.image}
                  alt={card.title}
                />

                <h3>
                  {card.title}
                </h3>

                <p>
                  {card.description}
                </p>

              </div>
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Hero;