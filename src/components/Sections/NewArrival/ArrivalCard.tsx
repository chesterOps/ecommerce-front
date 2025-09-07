import { useNavigate } from "react-router-dom";
import "./ArrivalCard.css";

interface ArrivalCardProps {
  image: string;
  className?: string;
  url: string;
}

const ArrivalCard: React.FC<ArrivalCardProps> = ({
  image,
  className = "",
  url,
}) => {
  const navigate = useNavigate();
  return (
    <div className={`arrival-card ${className}`} onClick={() => navigate(url)}>
      <img src={image} alt="Arrival" className="arrival-image" />
    </div>
  );
};

export default ArrivalCard;
