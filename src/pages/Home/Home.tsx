import "./Home.css";
import HeroSection from "../../components/Sections/HeroSection/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import EnhanceMusic from "../../components/Sections/EnhanceMusic/EnhanceMusic";
import OurProducts from "../../components/Sections/OurProducts/OurProducts";
import CategorySection from "../../components/Sections/CategoriesSection/CategorySection";
import BestSellingProducts from "../../components/Sections/BestSellingProducts/BestSellingProducts";
import FlashSales from "../../components/Sections/FlashSales/FlashSales";
import NewArrivalSection from "../../components/Sections/NewArrival/NewArrivalSection";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <Navbar />
      <HeroSection />
      <FlashSales />
      <CategorySection />
      <BestSellingProducts />
      <EnhanceMusic />
      <OurProducts />
      <NewArrivalSection />
      <Footer />
    </div>
  );
}
