function Pricing() {
  return (
    <div className="row my-5">
      <div className="col-md-5">
        <h2 className="mb-4">Unbeatable pricing</h2>
        <p className="my-3 pricing-para">
          We pioneered the concept of discount broking and price transparency in
          India. Flat fees and no hidden charges.
        </p>
        <a href="#" className="text-decoration-none pricing-link">
          See pricing <i className="fa fa-long-arrow-right"></i>
        </a>
      </div>
      <div className="col-md-7">
        <div className="row pricing-rightRow">
          <div className="col">
            <img src="/media/images/pricing0.svg" alt="1st Price Image" />
            <p className="pricing-text">
              Free account <br /> opening
            </p>
          </div>
          <div className="col">
            <img src="/media/images/pricing0.svg" alt="2nd Price Image" />
            <p className="pricing-text">
              Free equity delivery <br /> and direct mutual funds
            </p>
          </div>
          <div className="col">
            <img
              src="/media/images/pricing20-trades.svg"
              alt="3rd Price Image"
            />
            <p className="pricing-text">
              Intraday and <br /> F&O
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
