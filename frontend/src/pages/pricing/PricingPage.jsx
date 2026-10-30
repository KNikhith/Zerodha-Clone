import "./PricingPage.css";
import HeroSection from "./HeroSection.jsx";
import BrokerageDetails from "./BrokerageDetails.jsx";
import Charges from "./Charges.jsx";

function PricingPage() {
    return ( 
        <div className="container">
            <HeroSection />
            <BrokerageDetails />
            <Charges />
        </div>
     );
}

export default PricingPage;