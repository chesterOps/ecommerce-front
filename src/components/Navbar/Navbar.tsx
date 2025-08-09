import "./Navbar.css";
import { PiShoppingCartLight } from "react-icons/pi";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  return (
    <>
      <div className="top-announcement">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <a href="#">ShopNow</a>
        </p>
        <div className="language-select"><p>English</p><IoIosArrowDown className="arrow" /> </div>
      </div>

      <nav className="navbar">
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
            <BsSearch className="bs" />
          </div>
          <div className="icons">
            <span>
              <IoMdHeartEmpty />
            </span>
            <span>
              <PiShoppingCartLight />
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}
