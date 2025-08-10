
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-page">
      {/* Left Image Section */}
      <div className="login-image">
        <img
          src="/src/assets/SideImage.png" /* editable image path */
          alt="Shopping Illustration"
        />
      </div>

      {/* Right Form Section */}
      <div className="login-form-section">
        <div className="login-form-wrapper">
          <h2 className="login-title">Log in to Exclusive</h2>
          <p className="login-subtitle">Enter your details below</p>

          <form className="login-form">
            <input
              type="email"
              placeholder="Email"
              className="login-input"
            />
            <input
              type="password"
              placeholder="Password"
              className="login-input"
            />

            <div className="login-actions">
              <button type="submit" className="login-btn">
                Log In
              </button>
              <Link to="/forgot-password" className="login-forgot">
                Forget Password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
