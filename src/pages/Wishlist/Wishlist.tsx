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
import { useEffect, useState } from "react";
import ProductListLoader from "../../components/Loaders/ProductList/ProductLoader";

export default function Wishlist() {
  // Get wishlist items
  const wishlist = useSelector(getWishlistItems);

  // Get wishlist ids
  const ids = wishlist.map((item) => item.id);

  const [loading, setLoading] = useState(true);

  const [recommended, setRecommended] = useState<
    {
      title: string;
      price: number;
      images: { url: string }[];
      _id: string;
      discount?: number;
      slug: string;
      createdAt: Date;
      rating?: {
        value: number;
        length: number;
      };
    }[]
  >([]);

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
      slug: item.slug,
    }));

    // Add items to cart
    dispatch(addItems(cartItems));

    // Clear wishlist
    dispatch(clearWishlist());
  };

  useEffect(() => {
    const fetchRecommended = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://apiexclusive.onrender.com/api/v1/products/recommended",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ wishlist: ids }),
          }
        );

        const data = await response.json();

        if (data.status === "success") setRecommended(data.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchRecommended();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        {loading ? (
          <ProductListLoader />
        ) : (
          <div>
            {recommended.length > 0 ? (
              <div className="recommended-grid">
                {recommended.map((item, index) => (
                  <WishlistCard
                    key={index}
                    product={{
                      title: item.title,
                      id: item._id,
                      createdAt: item.createdAt,
                      discount: item.discount,
                      slug: item.slug,
                      image: item.images[0].url,
                      price: item.price,
                      rating: item.rating,
                    }}
                    isRecommend
                  />
                ))}
              </div>
            ) : (
              <div>No products found</div>
            )}
          </div>
        )}
        {/* <div className="recommended-grid">
          {recommended.map((item, index) => (
            <WishlistCard key={index} {...item} />
          ))}
        </div> */}
      </div>
    </div>
  );
}
