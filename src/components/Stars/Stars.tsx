import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Stars = ({ rating }: { rating: number }) => {
  return (
    <div className="stars">
      {[...Array(5)].map((_, i) => {
        const starValue = i + 1;

        if (rating >= starValue) {
          return <BsStarFill key={i} size={20} color="#ffad33" />;
        } else if (rating >= starValue - 0.5) {
          return <BsStarHalf key={i} size={20} color="#ffad33" />;
        } else {
          return <BsStar key={i} size={20} color="#ffad33" />;
        }
      })}
    </div>
  );
};

export default Stars;
