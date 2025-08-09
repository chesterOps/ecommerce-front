import "./ArrivalCard.css";

interface ArrivalCardProps {
  image: string;
  details: string;
  productTitle: string;
}

const ArrivalCard: React.FC<ArrivalCardProps> = ({ image, details, productTitle }) => {
  return (
    <div className="arrival-card">
      <img src={image} alt="Arrival" className="arrival-image" />
      <div className="arrival-details1">
        <h3 className="arrival-title">{productTitle}</h3>
      <p className="arrival-details">{details}</p>
      <button className="arrival-button">Shop Now</button>
      </div>
      
    </div>
  );
};

export default ArrivalCard;
