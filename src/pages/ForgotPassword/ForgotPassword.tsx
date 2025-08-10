import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Password reset link sent to:", email);
    // API call for sending reset email goes here
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
              <button type="submit" className="forgot-btn">
                Reset Password
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
