import { BiUser } from "react-icons/bi";
import { IoIosArrowDown, IoMdHeartEmpty } from "react-icons/io";
import { PiMagnifyingGlass, PiShoppingCartLight } from "react-icons/pi";
import "./Navbar.css";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };
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
          <Link to="/">
            <div className="navbar__logo">Exclusive</div>
          </Link>
          <ul className="navbar__links">
            <li>
              <Link to="/">Home</Link>
            </li>
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
            {/* Search Bar */}
            <form className="for" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="What are you looking for?"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <PiMagnifyingGlass className="bs" size={24} />
            </form>
            <div className="icons">
              <Link to="/wishlist">
                <IoMdHeartEmpty size={28} />
              </Link>
              <Link to="/cart">
                <PiShoppingCartLight size={28} />
              </Link>
              <Link to="/account">
                <BiUser size={28} />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
