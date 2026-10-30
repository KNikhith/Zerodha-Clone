import "./SupportPage.css";
import CreateTicket from "./CreateTicket.jsx";
import HeroSection from "./HeroSection.jsx";
import SupportFooter from "./SupportFooter.jsx";

function SupportPage() {
  return (
    <>
      <div className="container-fluid" id="supportHero">
        <HeroSection />
      </div>
      <div className="container pb-5">
        <CreateTicket />
      </div>
      <SupportFooter />
    </>
  );
}

export default SupportPage;
