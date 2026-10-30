import SignUpBtn from "../../components/SignUpBtn.jsx";

const UniverseLogos = ({ logoImgSrc, logoDescription }) => {
  return (
    <div className="col-md-4 universeLogos">
      <img src={logoImgSrc} alt="Universe Logo Image" />
      <p className="text-center text-muted">{logoDescription}</p>
    </div>
  );
};

function Universe() {
  return (
    <>
      <div className="row text-center py-5">
        <h2>The Zerodha Universe</h2>
        <p className="mt-4">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row px-5">
        <UniverseLogos
          logoImgSrc="/media/images/zerodhafundhouseLogo.png"
          logoDescription={
            <>
              Our asset management venture <br />
              that is creating simple and transparent index <br />
              funds to help you save for your goals.
            </>
          }
        />
        <UniverseLogos
          logoImgSrc="/media/images/sensibullLogo.svg"
          logoDescription={
            <>
              Options trading platform that lets you <br />
              create strategies, analyze positions, and examine <br />
              data points like open interest, FII/DII, and more.
            </>
          }
        />
        <UniverseLogos
          logoImgSrc="/media/images/tijoriLogo.svg"
          logoDescription={
            <>
              Investment research platform <br />
              that offers detailed insights on stocks, <br />
              sectors, supply chains, and more.
            </>
          }
        />
        <UniverseLogos
          logoImgSrc="/media/images/streakLogo.png"
          logoDescription={
            <>
              Systematic trading platform <br />
              that allows you to create and backtest <br />
              strategies without coding.
            </>
          }
        />
        <UniverseLogos
          logoImgSrc="/media/images/smallcaseLogo.png"
          logoDescription={
            <>
              Thematic investing platform <br />
              that helps you invest in diversified <br />
              baskets of stocks on ETFs.
            </>
          }
        />
        <UniverseLogos
          logoImgSrc="/media/images/dittoLogo.png"
          logoDescription={
            <>
              Personalized advice on life <br />
              and health insurance. No spam <br />
              and no mis-selling.
            </>
          }
        />
      </div>
      <div className="row universeSignUpBtn">
        <SignUpBtn />
      </div>
    </>
  );
}

export default Universe;
