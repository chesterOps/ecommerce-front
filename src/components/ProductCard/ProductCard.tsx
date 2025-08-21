import { useState } from "react";
//import { AiFillStar } from "react-icons/ai";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import "./ProductCard.css";
import { Link, useNavigate } from "react-router-dom";

interface ProductCardProps {
  product: {
    title: string;
    price: number;
    images: {
      url: string;
      public_id: string;
    }[];
    slug: string;
    createdAt: Date;
    discount?: number;
    colors?: string[];
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const [activeColor, setActiveColor] = useState<number>(0);
  const navigate = useNavigate();

  const handleColorClick = (index: number) => {
    setActiveColor(index);
  };

  const [liked, setLiked] = useState(false);

  const isNew =
    new Date(product.createdAt) >=
    new Date(Date.now() - 1 * 24 * 60 * 60 * 1000);

  return (
    <div className="product-card">
      <div className="image-wrapper">
        {(isNew || product.discount) && (
          <div className="product-tag">
            {isNew && <span className="feature tag">New</span>}
            {product.discount && (
              <span className="discount-rate tag">-{product.discount}%</span>
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
          <span
            className="icon-container"
            onClick={() => navigate(`/shop/${product.slug}`)}
          >
            <FiEye size={18} />
          </span>
        </div>
        <img
          src={product.images[0].url}
          alt={product.title}
          className="product-image"
          onClick={() => navigate(`/shop/${product.slug}`)}
        />
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
      <div className="product-info">
        <Link to={`/shop/${product.slug}`}>
          <h3 className="product-title">{product.title}</h3>
        </Link>
        <div className="price-ratings">
          {product.discount ? (
            <div className="prices">
              <p className="product-price">
                $
                {(
                  product.price -
                  product.price * product.discount * 0.01
                ).toFixed(2)}
              </p>
              <p className="previous-price">${product.price.toFixed(2)}</p>
            </div>
          ) : (
            <p className="product-price">${product.price.toFixed(2)}</p>
          )}
          {/* {product.rating && (
            <div className="ratings">
              {Array.from({ length: 5 }).map((_, i) =>
                i < product.rating ? (
                  <AiFillStar size={20} key={i} className="star gold" />
                ) : (
                  <AiFillStar size={20} key={i} className="star grey" />
                )
              )}
              <span className="no-of-ratings">({numberOfRatings})</span>
            </div>
          )} */}
        </div>
        {product.colors && (
          <div className="colors">
            {product.colors.map((color, index) => (
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
