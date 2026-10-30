import "./SignupPage.css";
import Login from "./Login.jsx";
import SignupRules from "./SignupRules.jsx";
import SupportFooter from "../support/SupportFooter.jsx";

function LoginPage() {
    return (
        <div className="container">
            <div className="signup-container">
            <Login />
            <SignupRules />
            </div>
            <SupportFooter />
        </div>
    );
}

export default LoginPage;