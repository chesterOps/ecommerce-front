import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import "./Reviews.css";

interface Review {
  _id: string;
  product: {
    _id: string;
    title: string;
    images: { url: string }[];
  };
  rating: number;
  content: string;
  createdAt: string;
  user: {
    name: string;
    email: string;
  };
}

const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://apiexclusive.onrender.com/api/v1/reviews",
          {
            credentials: "include",
          }
        );
        if (!res.ok) throw new Error("Failed to fetch reviews");
        const data = await res.json();
        setReviews(data.data || []);
      } catch (err) {
        console.error("Error fetching reviews:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <div className="reviews-page">
      <h2 className="content-title">Product Reviews</h2>

      {loading ? (
        <div className="loading">Loading reviews...</div>
      ) : reviews.length > 0 ? (
        <ul className="reviews-list">
          {reviews.map((review) => (
            <li key={review._id} className="review-item">
              <div className="review-left">
                <img
                  src={review.product.images[0].url}
                  alt={review.product.title}
                  className="product-img"
                />

                <div>
                  <h3>{review.product.title}</h3>
                  <p className="review-date">{formatDate(review.createdAt)}</p>
                  <div className="review-rating">
                    {Array.from({ length: 5 }, (_, i) => (
                      <FaStar
                        key={i}
                        size={16}
                        color={i < review.rating ? "#ffad33" : "#e7e7e7"}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="review-right">
                <p className="review-content">"{review.content}"</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
};

export default Reviews;
