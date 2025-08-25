import WishlistCard from "../../components/WishlistCard/WishlistCard";
import { useSelector } from "react-redux";
import {
  clearWishlist,
  getWishlistItems,
} from "../../features/wishlist/wishlistSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./Wishlist.css";
import { addItems } from "../../features/cart/cartSlice";

export default function Wishlist() {
  // Get wishlist items
  const wishlist = useSelector(getWishlistItems);

  // Navigate hook
  const navigate = useNavigate();

  // Dispatch hook
  const dispatch = useDispatch();

  // Handle move to bag
  const handleMoveToBag = () => {
    // Create cart items
    const cartItems = wishlist.map((item) => ({
      title: item.title,
      id: item.id,
      image: item.image,
      quantity: 1,
      price: item.price,
    }));

    // Add items to cart
    dispatch(addItems(cartItems));

    // Clear wishlist
    dispatch(clearWishlist());
  };

  const recommended = [
    {
      title: "Small BookShelf",
      price: "$360",
      image: "/src/assets/car.jpg",
      rating: 5,
      numberOfRatings: 12,
      showView: true,
    },
    {
      title: "iPhone 14 Pro",
      price: "$999",
      image: "/src/assets/car.jpg",
      rating: 5,
      numberOfRatings: 320,
      showView: true,
    },
    {
      title: "Small BookShelf",
      price: "$360",
      image: "/src/assets/car.jpg",
      rating: 5,
      numberOfRatings: 12,
      showView: true,
      isNew: true,
    },
    {
      title: "Small BookShelf",
      price: "$360",
      image: "/src/assets/car.jpg",
      rating: 5,
      numberOfRatings: 12,
      showView: true,
    },
  ];

  return (
    <div className="container">
      {/* Top Section */}
      <div className="wishlist-heading">
        <h2>Wishlist ({wishlist.length})</h2>
        {wishlist.length > 0 && (
          <button className="wishlist-btn" onClick={handleMoveToBag}>
            Move All To Bag
          </button>
        )}
      </div>
      <div className="wishlist-list">
        {wishlist.length > 0 ? (
          <>
            {wishlist.map((item, index) => (
              <WishlistCard key={index} product={item} showDelete />
            ))}
          </>
        ) : (
          <div>No items in wishist</div>
        )}
      </div>
      {/* Recommended Section */}
      <div className="wishlist-recommended">
        <div className="wishlist-heading2">
          <div className="just-for-you">
            <span className="red-line"></span>
            <h2>Just For You</h2>
          </div>
          <button className="wishlist-btn" onClick={() => navigate(`/shop`)}>
            See All
          </button>
        </div>
        {/* <div className="recommended-grid">
          {recommended.map((item, index) => (
            <WishlistCard key={index} {...item} />
          ))}
        </div> */}
      </div>
    </div>
  );
}
