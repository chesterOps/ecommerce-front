import "./Hero.css";
import slide1 from "../../../assets/iphone.jpg";
import slide2 from "../../../assets/ps5.jpg";
import slide3 from "../../../assets/sneakers.jpg";
import slide4 from "../../../assets/tv.jpg";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PiMagnifyingGlass } from "react-icons/pi";

export default function HeroSection() {
  const banners = [slide1, slide2, slide3, slide4];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <section className="container">
      <div className="hero-container">
        {/* Left Sidebar Categories */}
        <aside className="hero-categories">
          <ul>
            <li>
              <Link to="/category/womens-fashion">Women's Fashion</Link>
            </li>
            <li>
              <Link to="/category/mens-fashion">Men's Fashion</Link>
            </li>
            <li>
              <Link to="/category/electronics">Electronics</Link>
            </li>
            <li>
              <Link to="/category/home-and-lifestyle">Home & Lifestyle</Link>
            </li>
            <li>
              <Link to="/category/medicine">Medicine</Link>
            </li>
            <li>
              <Link to="/category/sports-and-outdoor">Sports & Outdoor</Link>
            </li>
            <li>
              <Link to="/category/babies-and-toys">Baby's & Toys</Link>
            </li>
            <li>
              <Link to="/category/groceries-and-pets">Groceries & Pets</Link>
            </li>
            <li>
              <Link to="/category/health-and-beauty">Health & Beauty</Link>
            </li>
          </ul>
        </aside>
        {/* Main Hero Content */}

        <div className="banner-container">
          <form className="mobile-search" onSubmit={handleSearch}>
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
          <div className="banner-image">
            <Link to="/shop">
              <img src={banners[currentSlide]} alt="Banner" />
            </Link>
          </div>
          <div className="slider-dots">
            {banners.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentSlide ? "active" : ""}`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
