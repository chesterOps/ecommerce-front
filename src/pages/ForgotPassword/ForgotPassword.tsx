import { useState } from "react";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

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
        toast.success(data.message || "Please check your email.");
      } else {
        toast.error(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forgot-page">
      {/* Left Image Section */}
      <div className="forgot-image">
        <img src="/sideimage.png" alt="Password Reset Illustration" />
      </div>

      {/* Right Form Section */}
      <div className="signup-form-section">
        <div className="login-form-wrapper">
          <h2 className="signup-title">Forgot Password</h2>
          <p className="login-subtitle">
            Enter your email to reset your password
          </p>

          <form className="forgot-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="forgot-actions">
              <button type="submit" className="forgot-btn" disabled={loading}>
                {loading ? "Sending..." : "Reset Password"}
              </button>
              <Link to="/login" className="forgot-back">
                Back to Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
