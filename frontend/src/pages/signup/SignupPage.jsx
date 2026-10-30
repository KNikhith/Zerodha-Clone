import "./SignupPage.css";
import Signup from "./Signup.jsx";
import SignupRules from "./SignupRules.jsx";
import SupportFooter from "../support/SupportFooter.jsx";

function SignupPage() {
  return (
    <div className="container">
      <div className="signup-container">
        <Signup />
        <SignupRules />
      </div>
      <SupportFooter />
    </div>
  );
}

export default SignupPage;
