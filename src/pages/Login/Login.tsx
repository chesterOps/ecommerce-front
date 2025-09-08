import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/auth/userSlice";
import { toast } from "react-toastify";

const Login = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://apiexclusive.onrender.com/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ identifier, password }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Set success message
      toast.success(data.message);

      // Set user
      dispatch(setUser(data.data));

      // Navigate to home
      setTimeout(() => {
        navigate("/");
      }, 4000);
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
    <div className="login-page">
      <div className="login-image">
        <img src="/sideimage.png" alt="Shopping Illustration" />
      </div>
      <div className="signup-form-section">
        <div className="login-form-wrapper">
          <h2 className="signup-title">Log in to Exclusive</h2>
          <p className="login-subtitle">Enter your details below</p>
          <form className="login-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Email or phonenumber"
              className="login-input"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="login-actions">
              <button type="submit" className="login-btn" disabled={loading}>
                {loading ? "Logging in..." : "Log In"}
              </button>
              <Link to="/forgot-password" className="login-forgot">
                Forgot Password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
