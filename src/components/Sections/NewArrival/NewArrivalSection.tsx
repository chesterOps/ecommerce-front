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
            <ArrivalCard image="src/assets/ps5.jpg" />
            <div className="right">
              <ArrivalCard image="src/assets/women-collection.jpg" />
              <div className="grid-bottom">
                <ArrivalCard image="src/assets/speakers.jpg" />
                <ArrivalCard image="src/assets/perfumes.jpg" />
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
            Imgsrc="/src/assets/services.svg"
          />
          <Features
            title="24/7 CUSTOMER SERVICE"
            description="Friendly 24/7 customer support"
            Imgsrc="/src/assets/customer-service.svg"
          />
          <Features
            title="MONEY BACK GUARANTEE"
            description="We return money within 30 days"
            Imgsrc="/src/assets/money-back.svg"
          />
        </div>
      </div>
    </>
  );
};

export default NewArrivalSection;
