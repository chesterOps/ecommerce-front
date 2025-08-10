import React from "react";
import "./Signup.css";

const Signup: React.FC = () => {
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

          <form className="signup-form">
            <input
              type="text"
              placeholder="Name"
              className="signup-input"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="signup-input"
              required
            />
             <input
              type="number"
              placeholder="Phone Number"
              className="signup-input"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="signup-input"
              required
            />

            {/* Google Sign-in Button */}
            <button type="button" className="signup-google-btn">
              <img src= "src/assets/Icon-Google.svg" alt="Google" />
              Sign in with Google
            </button>

            {/* Create Account Button */}
            <button type="submit" className="signup-btn">
              Create Account
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
