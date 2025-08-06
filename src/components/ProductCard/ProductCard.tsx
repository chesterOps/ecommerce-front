import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import "./ProductCard.css";


interface ProductCardProps {
  title: string;
  price: string;
  image: string;
  isNew?: boolean;
  discount?: string;
  numberOfRatings: number;
  rating: number;
  colors?: string[];
}

export default function ProductCard({
  title,
  price,
  image,
  isNew,
  discount,
  numberOfRatings,
  rating,
  colors,
}: ProductCardProps) {
  const [activeColor, setActiveColor] = useState<number>(0);

  const handleColorClick = (index: number) => {
    setActiveColor(index);
  };

  const [liked, setLiked] = useState(false);

  return (
    <div className="product-card">
      <div className="image-wrapper">
        <div className="product-tag">
          {isNew && <span className="feature">New</span>}
          {discount && <span className="discount-rate">{discount}</span>}
        </div>
        <div className="options">
          <span className="icon-container" onClick={() => setLiked(!liked)}>
            {liked ? (
              <FaHeart className="icon heart-active" size={28} />
            ) : (
              <FaRegHeart className="icon" size={28} />
            )}
          </span>
          <span className="icon-container">
            <FiEye className="icon" size={28} />
          </span>
        </div>
        <div className="image-container">
          <img src={image} alt={title} className="product-image" />
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <div className="price-ratings">
          <p className="product-price">{price}</p>
          <div className="ratings">
            {Array.from({ length: 5 }).map((_, i) =>
              i < rating ? (
                <AiFillStar key={i} className="star gold" />
              ) : (
                <AiOutlineStar key={i} className="star grey" />
              )
            )}
            <span className="no-of-ratings">({numberOfRatings})</span>
          </div>
        </div>
        <div className="colors">
          {colors?.map((color, index) => (
            <div
              key={index}
              className={`color ${activeColor === index ? "active" : ""}`}
              onClick={() => handleColorClick(index)}
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
