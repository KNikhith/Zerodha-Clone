import SignUpBtn from "../../components/SignUpBtn.jsx";

function HeroSection() {
    return (
        <div className="row p-5 mb-5 text-center">
            <img
                src="/media/images/homeHero.png"
                className="home-img mb-5 img-fluid w-auto"
                alt="Hero Image"
            />
            <h1 className="home-h1 mt-3">
                Invest in everything
            </h1>
            <p className="fs-5 pt-2 pb-4">
                Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
            </p>
            <SignUpBtn />
        </div>
    );
}

export default HeroSection;