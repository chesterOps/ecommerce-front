import React from "react";
import { IoCartOutline, IoTrashOutline } from "react-icons/io5";
import { FiEye } from "react-icons/fi";
import { useDispatch } from "react-redux";
//import { AiFillStar } from "react-icons/ai";
import { removeFromWishlist } from "../../features/wishlist/wishlistSlice";
import { Link, useNavigate } from "react-router-dom";
import "./WishlistCard.css";
import { addItem, isInCart } from "../../features/cart/cartSlice";
import { useSelector } from "react-redux";

interface WishlistCardProps {
  product: {
    title: string;
    id: string;
    price: number;
    image: string;
    discount?: number;
    slug: string;
    rating?: {
      value: number;
      length: number;
    };
    createdAt: Date;
  };
  showDelete?: boolean;
  showView?: boolean;
  isRecommend?: boolean;
}

const WishlistCard: React.FC<WishlistCardProps> = ({
  product,
  showDelete,
  showView,
  isRecommend = false,
}) => {
  // Dispatch hook
  const dispatch = useDispatch();

  // Navigate hook
  const navigate = useNavigate();

  // In cart
  const inCart = useSelector(isInCart(product.id));

  // Calculate price
  const price = product.discount
    ? Number(
        (product.price - product.price * product.discount * 0.01).toFixed(2)
      )
    : Number(product.price.toFixed(2));

  // Handle add to bag
  const handleAddToBag = () => {
    // Add to cart
    dispatch(
      addItem({
        title: product.title,
        price,
        image: product.image,
        quantity: 1,
        id: product.id,
        slug: product.slug,
      })
    );

    // Remove from wishlist
    if (!isRecommend) dispatch(removeFromWishlist(product.id));
  };

  // Check if product is new
  const isNew =
    new Date(product.createdAt) >=
    new Date(Date.now() - 1 * 24 * 60 * 60 * 1000);
  return (
    <div className="wishlist-card">
      <div className="wishlist-card-img">
        {product.discount && (
          <span className="wishlist-badge discount">-{product.discount}%</span>
        )}
        {isNew && <span className="wishlist-badge new">NEW</span>}
        <div className="wishlist-card-actions">
          {showDelete && (
            <button
              className="wishlist-icon-btn"
              onClick={() => dispatch(removeFromWishlist(product.id))}
            >
              <IoTrashOutline size={18} />
            </button>
          )}
          {showView && (
            <button
              className="wishlist-icon-btn"
              onClick={() => navigate(`/shop/${product.slug}`)}
            >
              <FiEye size={18} />
            </button>
          )}
        </div>
        <img
          src={product.image}
          alt={product.title}
          onClick={() => navigate(`/shop/${product.slug}`)}
        />
        {isRecommend && inCart ? (
          <button className="wishlist-add-btn">
            <IoCartOutline size={20} /> <span>In cart</span>
          </button>
        ) : (
          <button className="wishlist-add-btn" onClick={handleAddToBag}>
            <IoCartOutline size={20} /> <span>Add To Cart</span>
          </button>
        )}
      </div>
      <div className="wishlist-card-info">
        <Link to={`/shop/${product.slug}`}>
          <p className="wishlist-card-title">{product.title}</p>
        </Link>
        <div className="wishlist-price">
          {product.discount ? (
            <>
              <span className="price">
                ₦
                {(
                  product.price -
                  product.price * product.discount * 0.01
                ).toFixed(2)}
              </span>

              <span className="old-price">₦{product.price.toFixed(2)}</span>
            </>
          ) : (
            <span className="price">₦{product.price.toFixed(2)}</span>
          )}
        </div>
      </div>

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
  );
};

export default WishlistCard;
