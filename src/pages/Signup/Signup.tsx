import React, { useState } from "react";
import type { FormEvent } from "react";
import "./Signup.css";

interface SignupResponse {
  status: string;
  message: string;
  token?: string;
}

interface GoogleAuthResponse {
  status: string;
  message: string;
  token?: string;
}

const Signup: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

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
            phoneNumber,
            password,
          }),
        }
      );

      const data: SignupResponse = await response.json();

      if (response.ok) {
        setSuccess(data.message || "Account created successfully!");
      } else {
        setError(data.message || "Signup failed. Please try again.");
      }
    } catch {
      setError("An error occurred. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch(
        "https://apiexclusive.onrender.com/api/v1/auth/google-auth",
        {
          method: "GET", // Assuming it's a GET request; if it's POST, change accordingly
        }
      );

      const data: GoogleAuthResponse = await response.json();

      if (response.ok) {
        setSuccess(data.message || "Google authentication successful!");
      } else {
        setError(data.message || "Google authentication failed.");
      }
    } catch {
      setError("An error occurred during Google authentication.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-page">
      {/* Left image section */}
      <div className="signup-image">
        <img src="/src/assets/SideImage.png" alt="Signup" />
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
              type="number"
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

            {/* Google Sign-in Button */}
            <button
              type="button"
              className="signup-google-btn"
              onClick={handleGoogleAuth}
              disabled={loading}
            >
              <img src="src/assets/Icon-Google.svg" alt="Google" />
              Sign in with Google
            </button>

            {/* Create Account Button */}
            <button type="submit" className="signup-btn" disabled={loading}>
              {loading ? "Please wait..." : "Create Account"}
            </button>
          </form>

          <div className="signup-footer">
            Already have an account?{" "}
            <a href="/login" className="signup-login-link">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
