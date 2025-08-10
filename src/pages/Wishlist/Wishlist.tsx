import WishlistCard from "../../components/WishlistCard/WishlistCard";
import "./Wishlist.css";

export default function Wishlist() {
  const wishlistItems = [
    {
      title: "Gucci duffle bag",
      price: "$960",
      discountPrice: "$1160",
      discount: "-35%",
      image: "/src/assets/car.jpg",
      oldPrice: "$1160",
      showDelete: true
    },
    {
      title: "RGB liquid CPU Cooler",
      price: "$160",
      image: "/src/assets/car.jpg",
      showDelete: true
    },
      {
      title: "RGB liquid CPU Cooler",
      price: "$160",
      image: "/src/assets/car.jpg",
      showDelete: true
    },
      {
      title: "RGB liquid CPU Cooler",
      price: "$160",
      image: "/src/assets/car.jpg",
      showDelete: true
    }
  ];

  const recommended = [
    {
      title: "Small BookShelf",
      price: "$360",
      image: "/src/assets/car.jpg",
      rating: 5,
      numberOfRatings: 12,
      showView: true
    },
    {
      title: "iPhone 14 Pro",
      price: "$999",
      image: "/src/assets/car.jpg",
      rating: 5,
      numberOfRatings: 320,
      showView: true
    },
     {
      title: "Small BookShelf",
      price: "$360",
      image: "/src/assets/car.jpg",
      rating: 5,
      numberOfRatings: 12,
      showView: true,
      isNew: true
    },
     {
      title: "Small BookShelf",
      price: "$360",
      image: "/src/assets/car.jpg",
      rating: 5,
      numberOfRatings: 12,
      showView: true
    },
  ];

  return (
    <div className="container">
      {/* Top Section */}
      <div className="wishlist-heading">
        <h2>Wishlist ({wishlistItems.length})</h2>
        <button className="wishlist-btn">Move All To Bag</button>
      </div>

      <div className="wishlist-list">
        {wishlistItems.map((item, index) => (
          <WishlistCard key={index} {...item} />
        ))}
      </div>

      {/* Recommended Section */}
      <div className="wishlist-recommended">
        <div className="wishlist-heading2">
          <div className="just-for-you">
            <span className="red-line"></span>
            <h2>Just For You</h2>
          </div>
          <button className="wishlist-btn">See All</button>
        </div>
        <div className="recommended-grid">
          {recommended.map((item, index) => (
            <WishlistCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
