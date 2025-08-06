import { GoPaperAirplane } from "react-icons/go";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__columns">
        <div className="footer__col">
          <h3>Exclusive</h3>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
          <div className="footer__email">
            <input type="email" placeholder="Enter your email" />
            <button className="submit-btn">
              <GoPaperAirplane size={18} />
            </button>
          </div>
        </div>

        <div className="footer__col">
          <h4>Support</h4>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        <div className="footer__col">
          <h4>Account</h4>
          <ul>
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Quick Link</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Download App</h4>
          <p>Save $3 with App New User Only</p>
          <div className="qr-codes">
            <img src="/src/assets/footerimg.png" alt="Download App" />
          </div>
          <div className="socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  );
}
