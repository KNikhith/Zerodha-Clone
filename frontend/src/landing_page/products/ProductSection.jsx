import { Link } from "react-router-dom";
import "./Products.css";

function ProductSection({
  image,
  title,
  description,
  reverse = false,
  showButtons = false,
}) {
  return (
    <section className="product-section">
      <div className="container">

        <div
          className={`row align-items-center gy-5 ${
            reverse ? "flex-lg-row-reverse" : ""
          }`}
        >

          <div className="col-lg-6 text-center">
            <img
              src={image}
              alt={title}
              className="img-fluid product-image"
              loading="lazy"
            />
          </div>

          <div className="col-lg-6">

            <h2 className="product-title">
              {title}
            </h2>

            <p className="product-description">
              {description}
            </p>

            <div className="d-flex flex-wrap gap-4 mt-4">

              <Link to="/" className="section-link">
                Learn More
                <i className="fa-solid fa-arrow-right-long ms-2"></i>
              </Link>

              {showButtons && (
                <Link to="/" className="section-link">
                  Try Demo
                  <i className="fa-solid fa-arrow-right-long ms-2"></i>
                </Link>
              )}

            </div>

            {showButtons && (
              <div className="d-flex flex-wrap gap-3 mt-4">

                <img
                  src="/images/googlePlayBadge.svg"
                  alt="Google Play"
                  className="store-badge"
                />

                <img
                  src="/images/appstoreBadge.svg"
                  alt="App Store"
                  className="store-badge"
                />

              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

export default ProductSection;