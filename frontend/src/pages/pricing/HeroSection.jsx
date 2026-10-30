const PriceComp = ({ imgSrc, title, description }) => {
  return (
    <div className="col-md-4 mt-5 text-center pricingComp">
      <img src={imgSrc} />
      <h3>{title}</h3>
      <p className="p-1">{description}</p>
    </div>
  );
};

function HeroSection() {
  return (
    <>
      <div className="row text-center my-5 py-5 pricing-hero">
        <h1 className="mt-1">Charges</h1>
        <p className="fs-5 mt-2 topHeadingP">List of all charges and taxes</p>
      </div>
      <div className="row my-5">
        <PriceComp
          imgSrc="/media/images/pricing0.svg"
          title="Free equity delivery"
          description="All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage."
        />
        <PriceComp
          imgSrc="/media/images/pricing20-trades.svg"
          title="Intraday and F&O trades"
          description={
            <>
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </>
          }
        />
        <PriceComp
          imgSrc="/media/images/pricing0.svg"
          title="Free direct MF"
          description="All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges."
        />
      </div>
    </>
  );
}

export default HeroSection;
