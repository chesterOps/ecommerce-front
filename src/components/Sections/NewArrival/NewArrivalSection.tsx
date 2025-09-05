import CategoryCard from "../../CategoryCard/CategoryCard";
import ArrivalCard from "./ArrivalCard";
import Features from "./Features";
import "./NewArrivalSection.css";

const NewArrivalSection = () => {
  return (
    <>
      <div className="Arrivalsection">
        <CategoryCard title="Featured" heading="New Arrival" />
        <div className="container">
          <div className="ArrivalCards">
            <ArrivalCard image="/ps5.jpg" />
            <div className="right">
              <ArrivalCard image="/women-collection.jpg" />
              <div className="grid-bottom">
                <ArrivalCard image="/speakers.jpg" />
                <ArrivalCard image="/perfumes.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="services">
          <Features
            title="FREE AND FAST DELIVERY"
            description="Free delivery for all orders over $140"
            Imgsrc="/services.svg"
          />
          <Features
            title="24/7 CUSTOMER SERVICE"
            description="Friendly 24/7 customer support"
            Imgsrc="/customer-service.svg"
          />
          <Features
            title="MONEY BACK GUARANTEE"
            description="We return money within 30 days"
            Imgsrc="/money-back.svg"
          />
        </div>
      </div>
    </>
  );
};

export default NewArrivalSection;
