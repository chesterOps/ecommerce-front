import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./Orders.css";
import StarSelect from "../../StarSelect/StarSelect";

interface OrderItem {
  product: string;
  title: string;
  quantity: number;
  price: number;
}

interface Order {
  _id: string;
  status: string;
  createdAt: string;
  items: OrderItem[];
  ref?: string;
}

const Orders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [pending, setPending] = useState(false);

  // Review modal state
  const [selectedItem, setSelectedItem] = useState<OrderItem | null>(null);
  const [rating, setRating] = useState<number>(0);
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://apiexclusive.onrender.com/api/v1/orders",
          {
            credentials: "include",
          }
        );
        if (!res.ok) throw new Error("Failed to fetch orders");
        const data = await res.json();
        setOrders(data.data || []);
      } catch (err) {
        if (err instanceof Error) {
          console.error(err.message);
        } else {
          console.error("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleOpenReview = (item: OrderItem) => {
    setSelectedItem(item);
    setRating(0);
    setContent("");
  };

  const handleSubmitReview = async () => {
    if (!selectedItem) return;

    try {
      setPending(true);
      const res = await fetch(
        `https://apiexclusive.onrender.com/api/v1/reviews`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({
            rating,
            content,
            product: selectedItem.product,
          }),
        }
      );

      if (!res.ok) throw new Error("Failed to submit review");
      toast.success("Review submitted successfully!");
      setSelectedItem(null);
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error("An unknown error occurred");
      }
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="orders-page">
      <h2 className="content-title">My Orders</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {orders.length > 0 ? (
            <div
              style={{
                borderBottom: "1px solid #eee",
              }}
            >
              {orders.map((order) => (
                <div key={order._id} className="account-order-card">
                  <div className="order-header">
                    <p>
                      <strong>Order ID:</strong> {order._id}
                    </p>
                    <p>
                      <strong>Status:</strong> {order.status}
                    </p>
                    <p>
                      <strong>Date:</strong>{" "}
                      {new Date(order.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                      })}
                    </p>
                  </div>

                  <ul className="account-order-items">
                    {order.items.map((item, index) => (
                      <li key={index} className="account-order-item">
                        <span>
                          {item.title} ({item.quantity}) - ₦
                          {item.price.toFixed(2)}
                        </span>

                        <button
                          className="review-btn"
                          onClick={() => handleOpenReview(item)}
                        >
                          Review
                        </button>
                      </li>
                    ))}
                  </ul>

                  <div className="account-order-total">
                    <strong>Total:</strong> ₦
                    {order.items
                      .reduce(
                        (sum, item) => sum + item.price * item.quantity,
                        0
                      )
                      .toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No orders found.</p>
          )}
        </div>
      )}

      {/* Review Modal */}
      {selectedItem && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Review {selectedItem.title}</h2>

            <label>
              Rating:
              <StarSelect value={rating} onChange={setRating} />
            </label>

            <label>
              Comment:
              <textarea
                value={content}
                rows={6}
                onChange={(e) => setContent(e.target.value)}
              />
            </label>

            <div className="modal-actions">
              <button onClick={handleSubmitReview} disabled={rating === 0}>
                {pending ? "Loading..." : "Submit"}
              </button>
              <button onClick={() => setSelectedItem(null)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
