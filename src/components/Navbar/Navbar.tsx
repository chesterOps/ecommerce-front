import { BiUser } from "react-icons/bi";
import { IoIosArrowDown, IoMdHeartEmpty } from "react-icons/io";
import { PiMagnifyingGlass, PiShoppingCartLight } from "react-icons/pi";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="top-announcement">
        <div className="container">
          <div className="top-announcement--inner">
            <p>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
              <a href="#">ShopNow</a>
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
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Sign Up</a>
            </li>
          </ul>
          <div className="navbar__actions">
            <div className="for">
              <input type="text" placeholder="What are you looking for?" />
              <PiMagnifyingGlass className="bs" size={24} />
            </div>
            <div className="icons">
              <IoMdHeartEmpty size={28} />
              <PiShoppingCartLight size={28} />
              <BiUser size={28} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
