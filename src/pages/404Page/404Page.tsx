
import { Link } from "react-router-dom";
import "./404Page.css";

export default function NotFound() {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-title">404 Not Found</h1>
        <p className="notfound-text">
          Your visited page not found. You may go home page.
        </p>
        <Link to="/" className="notfound-home-btn">
          Back to home page
        </Link>
      </div>
    </div>
  );
}
