import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./StarSelect.css";

interface StarSelectProps {
  value: number;
  onChange: (value: number) => void;
  max?: number;
}

const StarSelect: React.FC<StarSelectProps> = ({
  value,
  onChange,
  max = 5,
}) => {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <div className="star-select">
      {Array.from({ length: max }, (_, i) => {
        const ratingValue = i + 1;
        return (
          <button
            key={ratingValue}
            type="button"
            className="star-btn"
            onClick={() => onChange(ratingValue)}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(null)}
          >
            <FaStar
              size={24}
              color={ratingValue <= (hover ?? value) ? "#ffad33" : "#e7e7e7"}
            />
          </button>
        );
      })}
    </div>
  );
};

export default StarSelect;
