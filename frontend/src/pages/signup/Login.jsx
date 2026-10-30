import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import validateLogin from "./validateLogin";
import { API_BASE_URL, DASHBOARD_BASE_URL } from "../../api";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
    if (Object.keys(errors).length > 0) {
      const firstErrorKey = Object.keys(errors)[0];
      document.getElementsByName(firstErrorKey)[0]?.focus();
    }
  }, [errors]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({});
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const validationErrors = validateLogin(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      try {
        const response = await axios.post(`${API_BASE_URL}/login`, formData);

        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          window.location.href = `${DASHBOARD_BASE_URL}/?token=${response.data.token}`;
        }
      } catch (error) {
        setErrors({
          apiError:
            error.response?.data?.message || "Invalid email or password!",
        });
      }
      setLoading(false);
    }
  };

  return (
    <div className="row signup-content">
      <div className="col-md-8">
        <img src="/media/images/signup.png" alt="Signup img" />
      </div>
      <div className="col-md-4 px-4">
        <h3>Login now</h3>
        <p className="my-2">Enter your email and password</p>

        <div className="customInput">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          ``
          {errors.email && <div className="error">{errors.email}</div>}
        </div>

        <div className="customInput">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <div className="error">{errors.password}</div>}

          {errors.apiError && (
            <div className="error text-danger">{errors.apiError}</div>
          )}

          <button
            className="btn btn-primary mt-3"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          <p className="authRedirectLink">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
