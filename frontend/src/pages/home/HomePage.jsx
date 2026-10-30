import "./HomePage.css";
import HeroSection from "./HeroSection.jsx";
import Awards from "./Awards.jsx";
import Stats from "./Stats.jsx";
import Pricing from "./Pricing.jsx";
import Education from "./Education.jsx";
import OpenAccount from "../../components/OpenAccount.jsx";

function HomePage() {
    return (
        <div className="container">
            <HeroSection />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
        </div>
    );
}

export default HomePage;