import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const response = await fetch(
        "https://apiexclusive.onrender.com/api/v1/auth/forgot-password",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || "Password reset link sent to your email.");
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }

  };

  return (
    <div className="forgot-page">
      {/* Left Image Section */}
      <div className="forgot-image">
        <img
          src="/src/assets/SideImage.png"
          alt="Password Reset Illustration"
        />
      </div>

      {/* Right Form Section */}
      <div className="forgot-form-section">
        <div className="forgot-form-wrapper">
          <h2 className="forgot-title">Forgot Password</h2>
          <p className="forgot-subtitle">
            Enter your email to reset your password
          </p>

          <form className="forgot-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              className="forgot-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="forgot-actions">
              <button
                type="submit"
                className="forgot-btn"
                disabled={loading}
              >
                {loading ? "Sending..." : "Reset Password"}
              </button>
              <Link to="/login" className="forgot-back">
                Back to Login
              </Link>
            </div>
            {message && <p className="success-message">{message}</p>}
            {error && <p className="error-message">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
