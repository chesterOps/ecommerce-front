import { GoPaperAirplane } from "react-icons/go";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer__col col-lg-5 col-md-3 col-sm-2">
            <h4 className="logo">Exclusive</h4>
            <h4 className="subscribe">Subscribe</h4>
            <p>Get 10% off your first order</p>
            <div className="footer__email">
              <input type="email" placeholder="Enter your email" />
              <button className="submit-btn">
                <GoPaperAirplane size={20} />
              </button>
            </div>
          </div>

          <div className="footer__col col-lg-5 col-md-3 col-sm-2">
            <h4>Support</h4>
            <ul>
              <li>
                <p>
                  111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
                </p>
              </li>
              <li>
                <p>exclusive@gmail.com</p>
              </li>
              <li>
                <p>+88015-88888-9999</p>
              </li>
            </ul>
          </div>

          <div className="footer__col col-lg-5 col-md-3 col-sm-2">
            <h4>Account</h4>
            <ul>
              <Link to="/account">My Account</Link>
              <Link to="/login">Login / Register</Link>
              <Link to="/cart">Cart</Link>
              <Link to="/wishlist">Wishlist</Link>
              <Link to="/shop">Shop</Link>
            </ul>
          </div>

          <div className="footer__col col-lg-5 col-md-3 col-sm-2">
            <h4>Quick Link</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>FAQ</li>
              <Link target="_blank" to="/contact">Contact</Link>
            </ul>
          </div>

          <div className="footer__col col-lg-5 col-md-3 col-sm-2">
            <h4>Download App</h4>
            <p className="save-app">Save $3 with App New User Only</p>
            <div className="qr-codes">
              <img src="/src/assets/footerimg.png" alt="Download App" />
            </div>
            <div className="socials">
              <Link target="_blank" to="https://www.facebook.com">
                <FaFacebookF size={24} />
              </Link>
              <Link target="_blank" to="www.twitter.com">
                <FaTwitter size={24} />
              </Link>
              <Link target="_blank" to="www.instagram.com">
                <FaInstagram size={24} />
              </Link>
              <Link target="_blank" to="www.linkedin.com">
                <FaLinkedinIn size={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>© Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  );
}
