import { useEffect, useRef, useState } from "react";
import {
  BiLogOut,
  BiShoppingBag,
  BiStar,
  BiUser,
  BiXCircle,
} from "react-icons/bi";
import { IoIosArrowDown, IoMdHeartEmpty } from "react-icons/io";
import { PiMagnifyingGlass, PiShoppingCartLight } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearUser, getUser } from "../../features/auth/userSlice";
import { totalCartItems } from "../../features/cart/cartSlice";
import { totalWishlistItems } from "../../features/wishlist/wishlistSlice";
import "./Navbar.css";
import MobileNav from "../MobileNav/MobileNav";

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFixed, setIsFixed] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);

  const user = useSelector(getUser);

  // Wishlist total
  const wishListTotal = useSelector(totalWishlistItems);

  // Cart total
  const cartTotal = useSelector(totalCartItems);

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      const response = await fetch(
        "https://apiexclusive.onrender.com/api/v1/auth/logout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Logout failed");

      setOpen(false);
      dispatch(clearUser());

      navigate("/", { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 45) {
        // change threshold as needed
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
      <nav className={`navbar ${isFixed ? "fixed" : ""}`}>
        <div className="container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <button
              className="nav-mobile"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              ☰
            </button>
            {menuOpen && (
              <MobileNav close={() => setMenuOpen(false)} isOpen={menuOpen} />
            )}
            <Link to="/">
              <div className="navbar__logo">Exclusive</div>
            </Link>
          </div>
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
              <PiMagnifyingGlass
                className="bs"
                size={24}
                style={{
                  cursor: "pointer",
                }}
                onClick={handleSearch}
              />
            </form>
            <div className="navbar-icons">
              <Link to="/wishlist">
                <IoMdHeartEmpty size={28} />
                {wishListTotal > 0 && (
                  <span className="icon-total">{wishListTotal}</span>
                )}
                {wishListTotal > 0 && (
                  <span className="icon-total">{wishListTotal}</span>
                )}
              </Link>
              <Link to="/cart">
                <PiShoppingCartLight size={28} />
                {cartTotal > 0 && (
                  <span className="icon-total">{cartTotal}</span>
                )}
                {cartTotal > 0 && (
                  <span className="icon-total">{cartTotal}</span>
                )}
              </Link>
              <div className="account-box" ref={dropdownRef}>
                <button
                  className={`account-menu`}
                  onClick={() =>
                    user ? setOpen((s) => !s) : navigate("/login")
                  }
                >
                  <BiUser size={28} style={{ pointerEvents: "none" }} />
                </button>
                {user && open && (
                  <ul className="account-nav">
                    <li>
                      <Link to="/account" onClick={() => setOpen(false)}>
                        <BiUser size={24} />
                        Manage My Account
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/account?tab=orders"
                        onClick={() => setOpen(false)}
                      >
                        <BiShoppingBag size={24} />
                        My Orders
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/account?tab=cancellatons"
                        onClick={() => setOpen(false)}
                      >
                        <BiXCircle size={24} />
                        My Cancellations
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/account?tab=reviews"
                        onClick={() => setOpen(false)}
                      >
                        <BiStar size={24} />
                        My Reviews
                      </Link>
                    </li>
                    <li>
                      <button className="logout-btn" onClick={handleLogout}>
                        <BiLogOut size={24} />
                        Logout
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
