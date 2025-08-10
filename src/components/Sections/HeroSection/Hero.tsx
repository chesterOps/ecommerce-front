import "./Hero.css";
import slide1 from "../../../assets/iphone.jpg";
import slide2 from "../../../assets/iphone.jpg";
import slide3 from "../../../assets/iphone.jpg";
import slide4 from "../../../assets/iphone.jpg";
import slide5 from "../../../assets/iphone.jpg";
import { useEffect, useState } from "react";
import { IoChevronForward } from "react-icons/io5";

export default function HeroSection() {
  const banners = [slide1, slide2, slide3, slide4, slide5];
  const [currentSlide, setCurrentSlide] = useState(0);

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
              Women's Fashion <IoChevronForward size={20} />
            </li>
            <li>
              Men's Fashion <IoChevronForward size={20} />
            </li>
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
        <div className="banner-container">
          <div className="banner-image">
            <img src={banners[currentSlide]} alt="Banner" />
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
