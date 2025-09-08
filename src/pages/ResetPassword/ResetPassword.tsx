import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const params = useParams<{ token: string }>();
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

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
      toast.success(data.message);

      // Go to login page
      setTimeout(() => navigate("/login"), 4000);
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error("An unknown error occurred");
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
      <div className="signup-form-section">
        <div className="login-form-wrapper">
          <h2 className="signup-title">Reset Password</h2>
          <p className="login-subtitle">Update your password</p>
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
