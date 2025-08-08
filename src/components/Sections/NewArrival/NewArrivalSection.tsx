import CategoryCard from "../../CategoryCard/CategoryCard";
import ArrivalCard from "./ArrivalCard";
import Features from "./Features";
import "./NewArrivalSection.css";

const NewArrivalSection = () => {
  return (
    <>
      <div className="Arrivalsection">
        <CategoryCard title="Featured" heading="New Arrival" />

        <div className="ArrivalCards">
          <img src="src/assets/ps4.jpg" alt="" />

          <div className="right">
            <img src="src/assets/women-collection.jpg" />
            <div className="bottom">
              <img src="src/assets/speakers.jpg" alt="" />
              <img src="src/assets/perfume.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="services">
        <Features
          title="FREE AND FAST DELIVERY"
          description="Free delivery for all orders over $140"
          Imgsrc="/src/assets/Services.svg"
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
    </>
  );
};

export default NewArrivalSection;
