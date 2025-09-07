//import { AiFillStar } from "react-icons/ai";
import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  addToWishlist,
  isInWishlist,
  removeFromWishlist,
} from "../../features/wishlist/wishlistSlice";
import { addItem, isInCart } from "../../features/cart/cartSlice";
import "./ProductCard.css";

interface ProductCardProps {
  product: {
    title: string;
    _id: string;
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
  // Color state
  const [activeColor, setActiveColor] = useState<number>(0);

  // Navigate hook
  const navigate = useNavigate();

  // Dispatch hook
  const dispatch = useDispatch();

  // Handle color click
  const handleColorClick = (index: number) => {
    setActiveColor(index);
  };

  // Check if product is in wishlist
  const isInWishList = useSelector(isInWishlist(product._id));

  // Check if product is in cart
  const inCart = useSelector(isInCart(product._id));

  // Check if product is new
  const isNew =
    new Date(product.createdAt) >=
    new Date(Date.now() - 1 * 24 * 60 * 60 * 1000);

  // Calculate price
  const price = product.discount
    ? Number(
        (product.price - product.price * product.discount * 0.01).toFixed(2)
      )
    : Number(product.price.toFixed(2));

  return (
    <>
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
            <span className="icon-container">
              {isInWishList ? (
                <FaHeart
                  className="heart-active"
                  size={18}
                  onClick={() => dispatch(removeFromWishlist(product._id))}
                />
              ) : (
                <FaRegHeart
                  size={18}
                  onClick={() =>
                    dispatch(
                      addToWishlist({
                        id: product._id,
                        title: product.title,
                        image: product.images[0].url,
                        price: product.price,
                        discount: product.discount,
                        createdAt: product.createdAt,
                        slug: product.slug,
                      })
                    )
                  }
                />
              )}
            </span>
            <Link to={`/shop/${product.slug}`}>
              <span className="icon-container">
                <FiEye size={18} />
              </span>
            </Link>
          </div>
          <img
            src={product.images[0].url}
            alt={product.title}
            className="product-image"
            onClick={() => navigate(`/shop/${product.slug}`)}
          />
          {inCart ? (
            <button className="add-to-cart-btn">In cart</button>
          ) : (
            <button
              className="add-to-cart-btn"
              onClick={() =>
                dispatch(
                  addItem({
                    id: product._id,
                    image: product.images[0].url,
                    price,
                    title: product.title,
                    quantity: 1,
                  })
                )
              }
            >
              Add to Cart
            </button>
          )}
        </div>
        <div className="product-info">
          <Link to={`/shop/${product.slug}`}>
            <h3 className="product-title">{product.title}</h3>
          </Link>
          <div className="price-ratings">
            {product.discount ? (
              <div className="prices">
                <p className="product-price">
                  ₦
                  {(
                    product.price -
                    product.price * product.discount * 0.01
                  ).toFixed(2)}
                </p>
                <p className="previous-price">₦{product.price.toFixed(2)}</p>
              </div>
            ) : (
              <p className="product-price">₦{product.price.toFixed(2)}</p>
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
    </>
  );
}
