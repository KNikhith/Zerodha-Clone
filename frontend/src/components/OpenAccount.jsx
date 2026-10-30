import SignUpBtn from "./SignUpBtn.jsx";

function OpenAccount() {
    return (
        <div className="row text-center p-5 mb-5">
            <h2 className="mt-3">
                Open a Zerodha account
            </h2>
            <p className="pt-2 pb-4">
                Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
            </p>
            <SignUpBtn />
        </div>
    );
}

export default OpenAccount;