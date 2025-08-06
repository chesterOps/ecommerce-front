import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="top-announcement">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <a href="#">ShopNow</a>
        </p>
        <div className="language-select">English ▼</div>
      </div>

      <nav className="navbar">
        <div className="navbar__logo">Exclusive</div>

        <ul className="navbar__links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Sign Up</a></li>
        </ul>

        <div className="navbar__actions">
          <input type="text" placeholder="What are you looking for?" />
          <div className="icons">
            <span>♡</span>
            <span>👤</span>
            <span>🛒</span>
          </div>
        </div>
      </nav>
    </>
  );
}
