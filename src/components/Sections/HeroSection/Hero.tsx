import Button from "../../Button/Button";
import "./Hero.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Left Sidebar Categories */}
        <aside className="hero-categories">
          <ul>
            <li>Women's Fashion</li>
            <li>Men's Fashion</li>
            <li>Electronics</li>
            <li>Home & Lifestyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Baby's & Toys</li>
            <li>Groceries & Pets</li>
            <li>Health & Beauty</li>
          </ul>
        </aside>

        {/* Main Hero Content */}
        <div className="hero-content">
          <p className="hero-subtitle">
            <img src="src/assets/apple-icon.png" alt="Apple" />
            iPhone 14 Series
          </p>
          <h1 className="hero-title">Up to 10% off Voucher</h1>
          <Button title="Shop now"/>

          {/* Carousel Dots */}
          <div className="carousel-dots">
            <span></span>
            <span></span>
            <span className="active"></span>
            <span></span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="hero-image">
          <img src="src/assets/hero-phone.png" alt="iPhone 14" />
        </div>
      </div>
    </section>
  );
}
