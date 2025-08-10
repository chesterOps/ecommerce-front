import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import "./ProductCard.css";

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  isNew?: boolean;
  discount?: number;
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
        {(isNew || discount) && (
          <div className="product-tag">
            {isNew && <span className="feature tag">New</span>}
            {discount && (
              <span className="discount-rate tag">-{discount}%</span>
            )}
          </div>
        )}
        <div className="options">
          <span className="icon-container" onClick={() => setLiked(!liked)}>
            {liked ? (
              <FaHeart className="heart-active" size={18} />
            ) : (
              <FaRegHeart size={18} />
            )}
          </span>
          <span className="icon-container">
            <FiEye size={18} />
          </span>
        </div>
        <img src={image} alt={title} className="product-image" />
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <div className="price-ratings">
          {discount ? (
            <div className="prices">
              <p className="product-price">
                ${(price - price * discount * 0.01).toFixed(2)}
              </p>
              <p className="previous-price">${price}</p>
            </div>
          ) : (
            <p className="product-price">${price}</p>
          )}
          {rating && (
            <div className="ratings">
              {Array.from({ length: 5 }).map((_, i) =>
                i < rating ? (
                  <AiFillStar size={20} key={i} className="star gold" />
                ) : (
                  <AiFillStar size={20} key={i} className="star grey" />
                )
              )}
              <span className="no-of-ratings">({numberOfRatings})</span>
            </div>
          )}
        </div>
        {colors && (
          <div className="colors">
            {colors.map((color, index) => (
              <div
                key={index}
                className={`color ${activeColor === index ? "active" : ""}`}
                onClick={() => handleColorClick(index)}
                style={{
                  backgroundColor: color,
                }}
              ></div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
