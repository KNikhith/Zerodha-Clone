import { Link } from "react-router-dom";
import "./About.css";

function Hero() {
  return (
    <section className="about-hero">

      <div className="container">

        <div className="about-heading">

          <h1>
            We pioneered the discount broking model in India.
          </h1>

          <p>
            Now, we are breaking new ground through technology and innovation.
          </p>

        </div>

        <div className="row gy-5">

          <div className="col-lg-6">

            <p>
              We started operations on 15 August 2010 with the goal of removing
              barriers that traders and investors face in India regarding cost,
              support, and technology.
            </p>

            <p>
              Today, Zerodha has become India's largest stock broker by building
              simple, transparent, and technology-driven investment platforms.
            </p>

            <p>
              More than one crore investors trust Zerodha every day to manage
              their investments.
            </p>

          </div>

          <div className="col-lg-6">

            <p>
              We also run educational initiatives and community platforms that
              empower investors to make informed financial decisions.
            </p>

            <p>
              <Link to="/" className="section-link">
                Rainmatter
              </Link>{" "}
              supports startups building the future of Indian finance.
            </p>

            <p>
              We continue to innovate while maintaining our customer-first
              philosophy.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;