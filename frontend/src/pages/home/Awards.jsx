function Awards() {
    return (
        <div className="row my-3">
            <div className="col-md-6 py-5 pr-5 mr-2">
                <img 
                    src="/media/images/largestBroker.svg" 
                    className="img-fluid w-100 px-2" 
                    alt="Largest Broker Image" 
                    style={{ maxWidth: "100%", height: "auto", display: "block" }}
                />
            </div>
            <div className="col-md-6 py-5 pl-5 ml-2">
                <h2 className="mt-4 mb-2">
                    Largest stock broker in India
                </h2>
                <p className="pt-1 mb-5">
                    2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:
                </p>
                <div className="row mt-2 mb-5">
                    <div className="col-6">
                        <ul>
                            <li>
                                <p>Futures and Options</p>
                            </li>
                            <li>
                                <p>Commodity derivatives</p>
                            </li>
                            <li>
                                <p>Currency derivatives</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>
                                <p>Stocks & IPOs</p>
                            </li>
                            <li>
                                <p>Direct mutual funds</p>
                            </li>
                            <li>
                                <p>Bonds and Govt. Securities</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <img src="/media/images/pressLogos.png" className="award-pressLogo-rightImg" alt="Press Logos Image" />
            </div>
        </div>
    );
}

export default Awards;