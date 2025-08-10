import React from "react";
import "./WishlistCard.css";
import { IoCartOutline, IoTrashOutline } from "react-icons/io5";
import { FiEye } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";

interface WishlistCardProps {
  image: string;
  title: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  isNew?: boolean;
  showDelete?: boolean;
  showView?: boolean;
  rating?: number;
  numberOfRatings?: number;
}

const WishlistCard: React.FC<WishlistCardProps> = ({
  image,
  title,
  price,
  oldPrice,
  discount,
  isNew,
  showDelete,
  showView,
  rating,
  numberOfRatings
}) => {
  return (
    <div className="wishlist-card">
      <div className="wishlist-card-img">
        {discount && <span className="wishlist-badge discount">{discount}</span>}
        {isNew && <span className="wishlist-badge new">NEW</span>}
        <div className="wishlist-card-actions">
          {showDelete && (
            <button className="wishlist-icon-btn">
              <IoTrashOutline size={18} />
            </button>
          )}
          {showView && (
            <button className="wishlist-icon-btn">
              <FiEye size={18} />
            </button>
          )}
        </div>
        <img src={image} alt={title} />
         <button className="wishlist-add-btn">
        <IoCartOutline  size={20} /> <span>Add To Cart</span>
      </button>
      </div>

      <div className="wishlist-card-info">
        <p className="wishlist-card-title">{title}</p>
        <div className="wishlist-price">
          <span className="price">{price}</span>
          {oldPrice && <span className="old-price">{oldPrice}</span>}
        </div>
      </div>

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
  );
};

export default WishlistCard;
