import "./Home.css";

const investmentOptions = [
  "Futures and Options",
  "Commodity derivatives",
  "Currency derivatives",
  "Stocks & IPOs",
  "Direct Mutual Funds",
  "Bonds and Government Securities",
];

function Awards() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row align-items-center gy-5">

          <div className="col-lg-6 text-center">
            <img
              src="/images/largestBroker.svg"
              alt="Largest Stock Broker"
              className="img-fluid awards-image"
              loading="lazy"
            />
          </div>

          <div className="col-lg-6">

            <h2 className="section-title">
              Largest Stock Broker in India
            </h2>

            <p className="section-description">
              More than 2 million Zerodha clients contribute to over 15% of all
              retail order volumes in India through investments in multiple
              financial instruments.
            </p>

            <div className="row mt-4">

              <div className="col-sm-6">
                <ul className="feature-list">
                  {investmentOptions.slice(0, 3).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="col-sm-6">
                <ul className="feature-list">
                  {investmentOptions.slice(3).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

            </div>

            <img
              src="/images/pressLogos.png"
              alt="Press Logos"
              className="img-fluid press-logo mt-4"
              loading="lazy"
            />

          </div>

        </div>
      </div>
    </section>
  );
}

export default Awards;