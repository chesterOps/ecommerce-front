import "./Home.css";
import HeroSection from "../../components/Sections/HeroSection/Hero";
import EnhanceMusic from "../../components/Sections/EnhanceMusic/EnhanceMusic";
import OurProducts from "../../components/Sections/OurProducts/OurProducts";
import CategorySection from "../../components/Sections/CategoriesSection/CategorySection";
import BestSellingProducts from "../../components/Sections/BestSellingProducts/BestSellingProducts";
import FlashSales from "../../components/Sections/FlashSales/FlashSales";
import NewArrivalSection from "../../components/Sections/NewArrival/NewArrivalSection";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <HeroSection />
      <FlashSales />
      <CategorySection />
      <BestSellingProducts />
      <EnhanceMusic />
      <OurProducts />
      <NewArrivalSection />
    </div>
  );
}
