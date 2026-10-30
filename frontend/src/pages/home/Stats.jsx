function Stats() {
  return (
    <div className="row my-3">
      <div className="col-md-5 py-5">
        <h2 className="mb-5 mt-1">Trust with confidence</h2>
        <h3 className="fs-5">Customer-first always</h3>
        <p className="stats-para text-muted">
          That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores
          of equity investments and contribute to 15% of daily retail exchange
          volumes in India.
        </p>
        <h3 className="fs-5">No spam or gimmicks</h3>
        <p className="stats-para text-muted">
          No gimmicks, spam, "gamification", or annoying push notifications.
          High quality apps that you use at your pace, the way you like.
        </p>
        <h3 className="fs-5">The Zerodha universe</h3>
        <p className="stats-para text-muted">
          Not just an app, but a whole ecosystem. Our investments in 30+ fintech
          startups offer you tailored services specific to your needs.
        </p>
        <h3 className="fs-5">Do better with money</h3>
        <p className="stats-para text-muted">
          With initiatives like Nudge and Kill Switch, we don't just facilitate
          transactions, but actively help you do better with your money.
        </p>
      </div>
      <div className="col-md-7 py-5">
        <img
          src="/media/images/ecosystem.png"
          className="stats-ecosystem-rightImg"
          alt="Ecosystem Image"
        />
        <div className="text-center mt-4 stats-link">
          <a href="#" className="mx-2 text-decoration-none">
            Explore our products <i className="fa fa-long-arrow-right"></i>
          </a>
          <a href="#" className="mx-3 text-decoration-none">
            Try Kite demo <i className="fa fa-long-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Stats;
