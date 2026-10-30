import "./ProductsPage.css";
import HeroSection from "./HeroSection.jsx";
import LeftImgSection from "./LeftImgSection.jsx";
import RightImgSection from "./RightImgSection.jsx";
import Universe from "./Universe.jsx";

function ProductsPage() {
  return (
    <div className="container">
      <HeroSection />
      <div className="pt-5">
        <LeftImgSection
          imgSrc="/media/images/kite.png"
          productTitle="Kite"
          productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
          firstLinkTitle={
            <>
              Try demo <i className="fa fa-long-right-arrow">→</i>
            </>
          }
          firstLinkUrl="#"
          secondLinkTitle={
            <>
              Learn more <i className="fa fa-long-right-arrow">→</i>
            </>
          }
          secondLinkUrl="#"
          googlePlayLink="#"
          appStoreLink="#"
        />
      </div>
      <RightImgSection
        productTitle="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        firstLinkUrl="#"
        firstLinkTitle={
          <>
            Learn more <i className="fa fa-long-right-arrow">→</i>
          </>
        }
        imgSrc="/media/images/console.png"
      />
      <LeftImgSection
        imgSrc="/media/images/coin.png"
        productTitle="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        firstLinkTitle={
          <>
            Coin <i className="fa fa-long-right-arrow">→</i>
          </>
        }
        firstLinkUrl="#"
        secondLinkTitle=""
        secondLinkUrl="#"
        googlePlayLink="#"
        appStoreLink="#"
      />
      <div className="kiteConnect">
        <RightImgSection
          productTitle="Kite Connect API"
          productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
          firstLinkUrl="#"
          firstLinkTitle={
            <>
              Kite Connect <i className="fa fa-long-right-arrow">→</i>
            </>
          }
          imgSrc="/media/images/kiteConnect.png"
        />
      </div>
      <div className="varsityMobile mt-3">
        <LeftImgSection
          imgSrc="/media/images/varsity.png"
          productTitle="Varsity mobile"
          productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
          firstLinkTitle=""
          firstLinkUrl="#"
          secondLinkTitle=""
          secondLinkUrl="#"
          googlePlayLink="#"
          appStoreLink="#"
        />
      </div>
      <p className="text-center fs-5 my-5">
        Want to know more about our technology stack? Check out the{" "}
        <a href="#" className="text-decoration-none">
          Zerodha.tech
        </a>{" "}
        blog.
      </p>
      <Universe />
    </div>
  );
}

export default ProductsPage;
