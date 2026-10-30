function Education() {
    return (
        <div className="row my-5 p-3">
            <div className="col-md-6 mt-5 p-5">
                <img src="/media/images/education.svg" className="education-img" alt="Education Image" />
            </div>
            <div className="col-md-6 ml-5">
                <h2 className="mt-5 pt-2">
                    Free and open market education
                </h2>
                <p className="mt-4 mb-3">
                    Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                </p>
                <a href="#" className="text-decoration-none education-link">
                    Varsity <i className="fa fa-long-arrow-right"></i>
                </a>
                <p className="mt-5 mb-3">
                    TradingQ&A, the most active trading and investment community in India for all your market related queries.
                </p>
                <a href="#" className="text-decoration-none education-link">
                    TradingQ&A <i className="fa fa-long-arrow-right"></i>
                </a>
            </div>
        </div>
    );
}

export default Education;