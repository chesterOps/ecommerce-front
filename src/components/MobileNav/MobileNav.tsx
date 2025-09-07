import { useState } from "react";
import { Link } from "react-router-dom";
import "./MobileNav.css";
import { BsXLg } from "react-icons/bs";

export default function MobileNav({
  close,
  isOpen,
}: {
  close: () => void;
  isOpen: boolean;
}) {
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const handleLinkClick = () => {
    close();
    setCategoriesOpen(false);
  };

  return (
    <>
      <div
        className={`mobile-overlay ${isOpen ? "active" : ""}`}
        onClick={close}
      />
      <ul className={`mobile-menu ${isOpen ? "active" : ""}`}>
        <li>
          <button onClick={close}>
            <BsXLg
              size={16}
              style={{
                marginRight: "4px",
              }}
            />{" "}
            Close
          </button>
        </li>
        <li>
          <Link to="/" onClick={handleLinkClick}>
            Home
          </Link>
          <Link to="/contact" onClick={handleLinkClick}>
            Contact
          </Link>
          <Link to="/about" onClick={handleLinkClick}>
            About
          </Link>
          <Link to="/signup" onClick={handleLinkClick}>
            Sign Up
          </Link>
        </li>
        <li>
          <button
            className="dropdown-toggle"
            onClick={() => setCategoriesOpen((prev) => !prev)}
          >
            Categories ▾
          </button>
          {categoriesOpen && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/category/womens-fashion" onClick={handleLinkClick}>
                  Women's Fashion
                </Link>
              </li>
              <li>
                <Link to="/category/mens-fashion" onClick={handleLinkClick}>
                  Men's Fashion
                </Link>
              </li>
              <li>
                <Link to="/category/electronics" onClick={handleLinkClick}>
                  Electronics
                </Link>
              </li>
              <li>
                <Link
                  to="/category/home-and-lifestyle"
                  onClick={handleLinkClick}
                >
                  Home & Lifestyle
                </Link>
              </li>
              <li>
                <Link to="/category/medicine" onClick={handleLinkClick}>
                  Medicine
                </Link>
              </li>
              <li>
                <Link
                  to="/category/sports-and-outdoor"
                  onClick={handleLinkClick}
                >
                  Sports & Outdoor
                </Link>
              </li>
              <li>
                <Link to="/category/babies-and-toys" onClick={handleLinkClick}>
                  Baby's & Toys
                </Link>
              </li>
              <li>
                <Link
                  to="/category/groceries-and-pets"
                  onClick={handleLinkClick}
                >
                  Groceries & Pets
                </Link>
              </li>
              <li>
                <Link
                  to="/category/health-and-beauty"
                  onClick={handleLinkClick}
                >
                  Health & Beauty
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </>
  );
}
