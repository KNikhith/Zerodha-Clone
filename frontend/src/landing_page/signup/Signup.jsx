import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import "./Signup.css";
import { signupUser } from "../../services/authService";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const { username, email, password } = formData;

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!username.trim()) {
      toast.error("Username is required.");
      return false;
    }

    if (!email.trim()) {
      toast.error("Email is required.");
      return false;
    }

    if (!password.trim()) {
      toast.error("Password is required.");
      return false;
    }

    if (password.length < 6) {
      toast.error("Password must contain at least 6 characters.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);

      const { data } = await signupUser(formData);

      if (data.status) {
        toast.success(data.message);

        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Unable to create your account."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="auth-page">

      <div className="auth-card">

        <h2>Create Your Account</h2>

        <p className="text-center text-muted mb-4">
          Start investing in minutes.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="auth-group">

            <label htmlFor="username">
              Username
            </label>

            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              placeholder="Enter username"
              value={username}
              onChange={handleChange}
              required
            />

          </div>

          <div className="auth-group">

            <label htmlFor="email">
              Email Address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Enter email"
              value={email}
              onChange={handleChange}
              required
            />

          </div>

          <div className="auth-group">

            <label htmlFor="password">
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              placeholder="Create password"
              value={password}
              onChange={handleChange}
              required
            />

          </div>

          <button
            className="auth-btn"
            type="submit"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

          <div className="auth-footer">

            Already have an account?

            <Link to="/login">
              {" "}Login
            </Link>

          </div>

        </form>

      </div>

    </section>
  );
}

export default Signup;