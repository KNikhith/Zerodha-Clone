import { Link } from "react-router-dom";
import "./Home.css";

const resources = [
  {
    title: "Varsity",
    description:
      "The largest online stock market education platform covering everything from basics to advanced trading.",
  },
  {
    title: "TradingQ&A",
    description:
      "India's largest trading and investment community where investors discuss markets and strategies.",
  },
];

function Education() {
  return (
    <section className="section-padding">
      <div className="container">

        <div className="row align-items-center gy-5">

          <div className="col-lg-6 text-center">

            <img
              src="/images/education.svg"
              alt="Education"
              className="img-fluid education-image"
              loading="lazy"
            />

          </div>

          <div className="col-lg-6">

            <h2 className="section-title">
              Free and Open Market Education
            </h2>

            {resources.map((resource) => (
              <div className="education-card" key={resource.title}>

                <h5>{resource.title}</h5>

                <p className="section-description">
                  {resource.description}
                </p>

                <Link to="/" className="section-link">
                  Learn More
                  <i className="fa-solid fa-arrow-right-long ms-2"></i>
                </Link>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;