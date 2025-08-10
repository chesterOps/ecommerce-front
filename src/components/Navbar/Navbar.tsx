import { BiUser } from "react-icons/bi";
import { IoIosArrowDown, IoMdHeartEmpty } from "react-icons/io";
import { PiMagnifyingGlass, PiShoppingCartLight } from "react-icons/pi";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="top-announcement">
        <div className="container">
          <div className="top-announcement--inner">
            <p>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
              <Link to="Shop">ShopNow</Link>
            </p>
            <div className="language-select">
              <p>English</p>
              <IoIosArrowDown />
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar">
        <div className="container">
          <div className="navbar__logo">Exclusive</div>
          <ul className="navbar__links">
            <li>
             <Link to ="/">Home</Link></li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
             <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
          <div className="navbar__actions">
            <div className="for">
              <input type="text" placeholder="What are you looking for?" />
              <PiMagnifyingGlass className="bs" size={24} />
            </div>
            <div className="icons">
              <Link to="/wishlist"><IoMdHeartEmpty size={28} /></Link>
              <Link to="/cart"><PiShoppingCartLight size={28} /></Link>
              <Link to="/account"><BiUser size={28} /></Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
