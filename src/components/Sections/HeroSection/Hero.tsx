
import "./Hero.css";
import React, { useEffect, useState } from "react";
import img1 from "../../../assets/iphone.png";
import img2 from "../../../assets/iphone.png";
import img3 from "../../../assets/car.png";
import { IoArrowForwardSharp } from "react-icons/io5";
import { BsApple } from "react-icons/bs";

export default function HeroSection() {
  const banners = [img1, img2, img3];
const [currentSlide, setCurrentSlide] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  }, 5000);
  return () => clearInterval(interval);
}, []);

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
          <div className="banner-container">
           <div className="banner-content">
            <div className="iph"><BsApple  className="apple" /><p>iphone 14 series</p> </div>
          <h1>Up to 10% <br></br>off Voucher</h1>
           <div className="forward"><a href="#shop" className="shop-link">Shop Now < IoArrowForwardSharp /></a>
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

           <div className="banner-image">
           <img src={banners[currentSlide]} alt="Banner" />
            </div>
       </div>  
      </div>
    </section>
  );
}
