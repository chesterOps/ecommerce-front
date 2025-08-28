import React, { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/auth/userSlice";
import { useGoogleLogin } from "@react-oauth/google";

interface SignupResponse {
  status: string;
  message: string;
  token: string;
  data: {
    name: string;
    email: string;
    role: string;
    phone: string;
    _id: string;
  };
}

const Signup: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://apiexclusive.onrender.com/api/v1/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone: phoneNumber,
            password,
          }),
        }
      );

      const data: SignupResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      // Set success message
      setSuccess(data.message);

      // Set user
      dispatch(setUser(data.data));

      // Navigate to home
      setTimeout(() => {
        navigate("/");
      }, 3000);
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

  const handleGoogleAuth = async (token: string) => {
    setError(null);

    try {
      const response = await fetch(
        "https://apiexclusive.onrender.com/api/v1/auth/google-auth",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
          credentials: "include",
        }
      );

      const data: SignupResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      // Set success message
      setSuccess(data.message);

      // Set user
      dispatch(setUser(data.data));

      // Navigate to home
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => handleGoogleAuth(tokenResponse.access_token),
    onError: () => setError("Login failed"),
  });

  return (
    <div className="signup-page">
      {/* Left image section */}
      <div className="signup-image">
        <img src="/sideimage.png" alt="Signup" />
      </div>

      {/* Right form section */}
      <div className="signup-form-section">
        <div className="signup-form-wrapper">
          <h2 className="signup-title">Create an account</h2>
          <p className="signup-subtitle">Enter your details below</p>

          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}

          <form className="signup-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              className="signup-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="signup-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="signup-input"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="signup-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="button"
              className="signup-google-btn"
              onClick={() => googleLogin()}
            >
              <img src="icon-google.svg" alt="Google" />
              Sign up with Google
            </button>

            {/* Create Account Button */}
            <button type="submit" className="signup-btn" disabled={loading}>
              {loading ? "Please wait..." : "Create Account"}
            </button>
          </form>

          <div className="signup-footer">
            Already have an account?{" "}
            <Link to="/login" className="signup-login-link">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
