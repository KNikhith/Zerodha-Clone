import { Link } from "react-router-dom";
import "./Home.css";

const features = [
  {
    title: "Customer-first always",
    description:
      "Over 1.3 crore customers trust Zerodha with investments worth more than ₹3.5 lakh crores.",
  },
  {
    title: "No spam or gimmicks",
    description:
      "No unnecessary notifications, gamification or distractions. Just powerful investing tools.",
  },
  {
    title: "The Zerodha Universe",
    description:
      "An ecosystem of products and fintech startups that help investors make smarter financial decisions.",
  },
  {
    title: "Do better with money",
    description:
      "Initiatives like Nudge and Kill Switch help users become disciplined investors.",
  },
];

function Stats() {
  return (
    <section className="section-light">
      <div className="container">

        <div className="row align-items-center gy-5">

          <div className="col-lg-6">

            <h2 className="section-title mb-5">
              Trust with confidence
            </h2>

            {features.map((feature) => (
              <div className="mb-4" key={feature.title}>
                <h5>{feature.title}</h5>
                <p className="text-muted">
                  {feature.description}
                </p>
              </div>
            ))}

          </div>

          <div className="col-lg-6 text-center">

            <img
              src="/images/ecosystem.png"
              alt="Zerodha Ecosystem"
              className="img-fluid ecosystem-image"
              loading="lazy"
            />

            <div className="d-flex justify-content-center gap-4 flex-wrap mt-4">

              <Link to="/product" className="section-link">
                Explore Products
                <i className="fa-solid fa-arrow-right-long ms-2"></i>
              </Link>

              <Link to="/product" className="section-link">
                Try Kite Demo
                <i className="fa-solid fa-arrow-right-long ms-2"></i>
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Stats;
