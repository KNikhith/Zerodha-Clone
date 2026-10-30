import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import validateSignupSteps from "./validateSignupSteps.js";
import { API_BASE_URL } from "../../api.js";

function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    otp: "",
    fullName: "",
    password: "",
    confirmPassword: "",
  });
  const [signupStep, setSignupStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current?.focus();
    if (Object.keys(errors).length > 0) {
      const firstErrorKey = Object.keys(errors)[0];
      document.getElementsByName(firstErrorKey)[0]?.focus();
    }
  }, [signupStep, errors]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({});
  };

  const handleNextStep = async (e) => {
    e.preventDefault();
    const newErrors = validateSignupSteps(signupStep, formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      if (signupStep === 1) {
        // Send OTP
        try {
          setLoading(true);
          const res = await axios.post(`${API_BASE_URL}/send-otp`, {
            email: formData.email,
          });
          alert(res.data.message);
          setSignupStep(signupStep + 1);
        } catch (error) {
          setErrors({
            email: error.response?.data?.message || "Failed to send OTP",
          });
        } finally {
          setLoading(false);
        }
      } else if (signupStep === 2) {
        // Verify OTP
        try {
          setLoading(true);
          const res = await axios.post(`${API_BASE_URL}/verify-otp`, {
            email: formData.email,
            otp: formData.otp,
          });
          alert(res.data.message);
          setSignupStep(signupStep + 1);
        } catch (error) {
          setErrors({ otp: error.response?.data?.message || "Invalid OTP" });
        } finally {
          setLoading(false);
        }
      } else if (signupStep === 3) {
        // Complete Signup
        try {
          setLoading(true);
          const res = await axios.post(`${API_BASE_URL}/signup`, formData);
          alert(res.data.message);
          navigate("/login");
        } catch (error) {
          setErrors(
            error.response?.data?.errors || { general: "Signup failed" },
          );
        } finally {
          setLoading(false);
        }
      }
    }
  };

  const handleBackStep = () => {
    setSignupStep(signupStep - 1);
  };

  return (
    <>
      <div className="row signup-content">
        <div className="col-md-8">
          <img src="/media/images/signup.png" alt="Signup img" />
        </div>
        <div className="col-md-4 px-4">
          {signupStep === 1 && (
            <>
              <h3 className="mt-4">Signup now</h3>
              <p className="my-3">Or track your existing application.</p>
              <div className="customInput">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  id="email"
                  ref={inputRef}
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && <div className="error">{errors.email}</div>}
                <p>You will receive an OTP on your email</p>
                <button
                  className="btn btn-primary"
                  onClick={handleNextStep}
                  disabled={loading}
                >
                  {loading ? "Sending OTP..." : "Send OTP"}
                </button>
                <p className="authRedirectLink">
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </>
          )}
          {signupStep === 2 && (
            <>
              <h3 className="mt-4">Confirm OTP</h3>
              <p className="my-3">
                Sent to {formData.email}{" "}
                <button className="btnRmvDef" onClick={handleBackStep}>
                  (Change)
                </button>
              </p>
              <div className="customInput">
                <label htmlFor="otp">Email OTP</label>
                <input
                  type="text"
                  id="otp"
                  ref={inputRef}
                  name="otp"
                  value={formData.otp}
                  onChange={handleInputChange}
                />
                {errors.otp && <div className="error">{errors.otp}</div>}
                <p>
                  Didn't receive OTP?
                  <button
                    className="btnRmvDef"
                    style={{ marginLeft: "-1.93rem" }}
                    onClick={handleNextStep}
                    disabled={loading}
                  >
                    Send again
                  </button>
                </p>
                <button
                  className="btn btn-primary"
                  onClick={handleNextStep}
                  disabled={loading}
                >
                  {loading ? "Verifying..." : "Verify"}
                </button>
              </div>
            </>
          )}
          {signupStep === 3 && (
            <>
              <h3>Enter details</h3>
              <p className="my-2">Enter name and set password</p>
              <div className="customInput">
                <label htmlFor="fullName">Full name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
                {errors.fullName && (
                  <div className="error">{errors.fullName}</div>
                )}
              </div>
              <div className="customInput">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                {errors.password && (
                  <div className="error">{errors.password}</div>
                )}
              </div>
              <div className="customInput">
                <label htmlFor="confirmPassword">Confirm password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                />
                {errors.confirmPassword && (
                  <div className="error">{errors.confirmPassword}</div>
                )}
                <button
                  className="btn btn-primary mt-4"
                  onClick={handleNextStep}
                  disabled={loading}
                >
                  {loading ? "Signing up..." : "Signup"}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Signup;
