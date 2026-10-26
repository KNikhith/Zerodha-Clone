import "./Pricing.css";

function Content({ heading, context }) {
  return (
    <div className="content-card">

      <h5>
        {heading}
      </h5>

      <div className="text-muted">
        {context}
      </div>

    </div>
  );
}

export default Content;