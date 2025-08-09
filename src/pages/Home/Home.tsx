import CategoryCard from "../../components/CategoryCard/CategoryCard";
import HeroSection from "../../components/Sections/HeroSection/Hero";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import EnhanceMusic from "../../components/Sections/EnhanceMusic/EnhanceMusic";
import Category from "../../components/Sections/CategoriesSection/category";
import ArrivalCard from "../../components/Sections/NewArrival/ArrivalCard";
import Features from "../../components/Sections/NewArrival/Features";
import Button from "../../components/Button/Button";
import OurProducts from "../../components/Sections/OurProducts/OurProducts";
import CategorySection from "../../components/Sections/CategoriesSection/CategorySection";
import BestSellingProducts from "../../components/Sections/BestSellingProducts/BestSellingProducts";
import FlashSales from "../../components/Sections/FlashSales/FlashSales";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <Navbar />
      {/* Hero Section */}
      <HeroSection />
      <CategorySection />
      <BestSellingProducts />
      <OurProducts />
       <FlashSales />
      <EnhanceMusic />

       <ProductCard
        title="Wireless Headphones"
        price="$49.99"
        image="/src/assets/car.png"
        isNew={true}
        discount="-20%"
        numberOfRatings={140}
        rating={4}
        colors={["#000000", "#ff0000", "#0000ff"]}
      />

      <ProductCard
        title="Smart Watch"
        price="$89.99"
        image="/src/assets/car.png"
        isNew={false}
        numberOfRatings={90}
        rating={3}
        colors={["#888888", "#ffffff"]}
      />
      <Button title="Shop now"/>
      <Button title="Shop now"/>
      <Category title="Phones" />
      <Category title="Camera" />
      <Category title="Computer" />
      <Category title="Watch" />
      <Category title="Games" />
      <Category title="Headset" />

      {/* Category Section */}
      <section className="section">
        <h2>Shop by Category</h2>
        <div className="card-grid">
          <CategoryCard
            title="Limited Deals"
            heading="Flash Sale"
            showArrows
            showCounter
          />
          <Features
  title="High Quality Sound"
  description="Experience immersive audio with deep bass and clear treble."
  Imgsrc="/src/assets/Services.svg"
/>

           <ArrivalCard
        image="/src/assets/ps4.svg"
        productTitle="PlayStation 4"
        details="Experience immersive gaming with stunning graphics."
      />

          <CategoryCard
            title="Women’s Fashion"
            heading="Popular in Women’s Fashion"
            showArrows
          />
          <CategoryCard
            title="Electronics"
            heading="Top Electronics Deals"
            showButton
          />
          <CategoryCard title="Beauty" heading="Latest Beauty Picks" />
        </div>
      </section>

      {/* Best Selling Products */}
      <section className="section">
        <h2>Best Sellers</h2>
        <div className="card-grid">
          <ProductCard
            title="Kids Electric Car"
            price="$59.99"
            image="/src/assets/car.png"
            numberOfRatings={128}
            rating={4}
            colors={["#F43F5E", "#0F172A", "#10B981"]}
          />
        </div>
      </section>

      {/* Featured Products */}
      <section className="section">
        <h2>Featured Picks</h2>
        <div className="card-grid"></div>
      </section>
      <Footer />
    </div>
  );
}
