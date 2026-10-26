import { Link } from "react-router-dom";
import "./Support.css";

const quickLinks = [
  "Track account opening",
  "Track segment activation",
  "Intraday margins",
  "Kite user manual",
];

const featured = [
  "Current Takeovers and Delisting",
  "Latest Intraday Leveraged MIS & CO",
];

function Hero() {
  return (
    <section className="support-hero">
      <div className="container">

        <div className="support-top">
          <h3>Support Portal</h3>

          <Link to="/">
            Track Tickets
          </Link>
        </div>

        <div className="row gy-5">

          <div className="col-lg-7">

            <h2>
              Search for an answer or browse help topics to create a ticket.
            </h2>

            <input
              className="support-search"
              type="text"
              placeholder="Eg. How do I activate F&O?"
            />

            <div className="quick-links">

              {quickLinks.map((item) => (
                <Link key={item} to="/">
                  {item}
                </Link>
              ))}

            </div>

          </div>

          <div className="col-lg-5">

            <h3>Featured</h3>

            <ol>

              {featured.map((item) => (
                <li key={item}>
                  <Link to="/">
                    {item}
                  </Link>
                </li>
              ))}

            </ol>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;