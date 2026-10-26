import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "70vh" }}
    >
      <div className="text-center">

        <h1
          className="display-1 fw-bold text-primary"
        >
          404
        </h1>

        <h2 className="mb-3">
          Page Not Found
        </h2>

        <p className="text-muted mb-4">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="btn btn-primary px-4"
        >
          Back to Home
        </Link>

      </div>
    </section>
  );
}

export default NotFound;