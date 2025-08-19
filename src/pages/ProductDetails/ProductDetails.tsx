import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { TbTruck } from "react-icons/tb";
import { BiRotateLeft } from "react-icons/bi";
import {  FaEye, FaStar, FaRegStar } from "react-icons/fa";
import "./ProductDetails.css";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  discount: string;
  image: string;
  rating: number;
  reviews: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    oldPrice: 160,
    discount: "-40%",
    image: "/src/assets/car.jpg",
    rating: 5,
    reviews: 88,
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    price: 960,
    oldPrice: 1160,
    discount: "-33%",
    image: "/src/assets/car.jpg",
    rating: 4,
    reviews: 75,
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    price: 370,
    oldPrice: 400,
    discount: "-30%",
    image: "/src/assets/car.jpg",
    rating: 5,
    reviews: 99,
  },
  {
    id: 4,
    name: "RGB liquid CPU Cooler",
    price: 160,
    oldPrice: 170,
    discount: "-6%",
    image: "/src/assets/car.jpg",
    rating: 4,
    reviews: 65,
  },
];

const ProductDetails: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [selectedColor, setSelectedColor] = useState<string>("blue");
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [quantity, setQuantity] = useState<number>(2);

  const images: string[] = [
    "/src/assets/gamepad.svg", // Main gamepad image
    "/src/assets/gamepad.svg", // Side view 1
    "/src/assets/gamepad.svg", // Side view 2
    "/src/assets/gamepad.svg", // Side view 3
  ];

  const colors = [
    { name: "blue", color: "#4A90E2" },
    { name: "red", color: "#E74C3C" },
  ];

  const sizes: string[] = ["XS", "S", "M", "L", "XL"];

  const handleQuantityChange = (change: number): void => {
    setQuantity(Math.max(1, quantity + change));
  };

  return (
    <div className="product-page">
      <div className="product-container">
        {/* Image Gallery */}
        <div className="image-gallery">
          <div className="thumbnail-list">
            {images.map((image, index) => (
              <div
                key={index}
                className={`thumbnail ${
                  selectedImage === index ? "active" : ""
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={image} alt={`Product view ${index + 1}`} />
              </div>
            ))}
          </div>
          <div className="main-image">
            <img src={images[selectedImage]} alt="Havic HV G-92 Gamepad" />
          </div>
        </div>

        {/* Product Details */}
        <div className="product-details">
          <h1 className="product-title">Havic HV G-92 Gamepad</h1>

          <div className="rating">
            <div className="stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="star filled">
                  ★
                </span>
              ))}
            </div>
            <span className="review-count">(150 Reviews)</span>
            <span className="stock-status">| In Stock</span>
          </div>

          <div className="price">$192.00</div>

          <p className="description">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </p>

          <div></div>

          <div className="p-options">
            <div className="color-section">
              <label>Colours:</label>
              <div className="color-options">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    className={`color-option ${
                      selectedColor === color.name ? "active" : ""
                    }`}
                    style={{ backgroundColor: color.color }}
                    onClick={() => setSelectedColor(color.name)}
                  />
                ))}
              </div>
            </div>

            <div className="size-section">
              <label>Size:</label>
              <div className="size-options">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`size-option ${
                      selectedSize === size ? "active" : ""
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="purchase-section">
            <div className="quantity-selector">
              <button onClick={() => handleQuantityChange(-1)}>-</button>
              <span>{quantity}</span>
              <button onClick={() => handleQuantityChange(1)}>+</button>
            </div>

            <button className="buy-now-btn">Buy Now</button>

            <button className="wishlist-btn">
              <AiOutlineHeart size={20} />
            </button>
          </div>

          <div className="delivery-info">
            <div className="delivery-item">
              <div className="delivery-icon">
                <TbTruck size={24} />
              </div>
              <div className="delivery-text">
                <div className="delivery-title">Free Delivery</div>
                <div className="delivery-subtitle">
                  Enter your postal code for Delivery Availability
                </div>
              </div>
            </div>

            <div className="delivery-item">
              <div className="delivery-icon">
                <BiRotateLeft size={24} />
              </div>
              <div className="delivery-text">
                <div className="delivery-title">Return Delivery</div>
                <div className="delivery-subtitle">
                  Free 30 Days Delivery Returns. Details
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="related-container">
        <div className="block-cn">
          <div className="block-it"></div>
          <h3 className="related-title">Related Item</h3>
        </div>
        

        <div className="product-list">
          {products.map((item) => (
            <div key={item.id} className="game-card">
              <div className="image-box">
                {/* ✅ discount badge on image */}
                <span className="discount">{item.discount}</span>

                <img src={item.image} alt={item.name} />

                <div className="icons">
                  <CiHeart className="heart-icon"/>
                  <IoEyeOutline className="eye-icon" />
                </div>
              </div>

              <div className="game-info">
                <h4 className="product-name">{item.name}</h4>

              <div className="price">
                <span className="new-price">${item.price}</span>
                <span className="old-price">${item.oldPrice}</span>
              </div>

              <div className="rating">
                {Array.from({ length: 5 }, (_, i) =>
                  i < item.rating ? <FaStar key={i} /> : <FaRegStar key={i} />
                )}
                <span className="reviews">({item.reviews})</span>
              </div>
              </div>

              

              <button className="cart-btn">Add To Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
