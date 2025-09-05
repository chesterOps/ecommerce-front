import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
  const params = useParams<{ token: string }>();
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const response = await fetch(
        `https://apiexclusive.onrender.com/api/v1/auth/reset-password/${params.token}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password, passwordConfirm }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      // Set message
      setMessage(data.message);

      // Go to login page
      setTimeout(() => navigate("/login"), 3000);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
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
      <div className="login-form-section">
        <div className="login-form-wrapper">
          <h2 className="login-title">Reset Password</h2>
          <p className="login-subtitle">Update your password</p>
          {message && <p className="success-message">{message}</p>}
          {error && <p className="error-message">{error}</p>}
          <form className="forgot-form" onSubmit={handleSubmit}>
            <input
              type="password"
              placeholder="New password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Confirm password"
              className="login-input"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              required
            />
            <div className="forgot-actions">
              <button type="submit" className="forgot-btn" disabled={loading}>
                {loading ? "Loading..." : "Reset Password"}
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

export default ResetPassword;
