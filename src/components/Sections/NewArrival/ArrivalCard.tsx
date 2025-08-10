import "./ArrivalCard.css";

interface ArrivalCardProps {
  image: string;
  className?: string;
}

const ArrivalCard: React.FC<ArrivalCardProps> = ({ image, className = "" }) => {
  return (
    <div className={`arrival-card ${className}`}>
      <img src={image} alt="Arrival" className="arrival-image" />
    </div>
  );
};

export default ArrivalCard;
