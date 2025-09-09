import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./OrderConfirm.css";
import { useDispatch } from "react-redux";
import { clearCart } from "../../features/cart/cartSlice";

interface IOrder {
  _id: string;
  status: string;
  billingAddress: {
    name: string;
    email: string;
    city: string;
    phone: string;
    addressLine1: string;
    addressLine2?: string;
    companyName?: string;
  };
  paymentMethod: "card" | "cash-on-delivery";
  items: {
    title: string;
    price: number;
    quantity: number;
    product: string;
  }[];
  user?: string;
  ref?: string;
}

export default function OrderConfirm() {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [order, setOrder] = useState<IOrder | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch order details from backend
    const fetchOrder = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/v1/orders/${orderId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "header/application",
            },
          }
        );
        const data = await res.json();
        setOrder(data.data);

        // Clear previous cart
        dispatch(clearCart());
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId, dispatch]);

  if (loading) {
    return (
      <div className="order-confirmation loading">
        <p>Loading...</p>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="order-confirmation error">
        <p>⚠️ Order not found.</p>
        <button onClick={() => navigate("/")}>Back to Shop</button>
      </div>
    );
  }

  return (
    <div className="order-confirmation">
      <h1>🎉 Order Confirmed!</h1>
      <p className="order-id">
        Thank you for your order. Your order ID is <strong>{order._id}</strong>.
      </p>

      <div className="order-box">
        <p>
          <span className="order-label">Payment Method:</span>{" "}
          {order.paymentMethod === "card" ? "Card payment" : "Cash on delivery"}
        </p>
        <p>
          <span className="order-label">Payment Status:</span>{" "}
          {order.status === "paid" ? (
            <span className="order-status success">Paid ✅</span>
          ) : (
            <span className="order-status pending">Pending ⏳</span>
          )}
        </p>
      </div>

      <h2>Order Summary</h2>
      <ul className="order-items-list">
        {order.items.map((item) => (
          <li key={item.product}>
            <span>{item.title}</span>
            <span>
              {item.quantity} × ₦{item.price.toFixed(2)}
            </span>
          </li>
        ))}
      </ul>

      <div className="order-total">
        <span>Total:</span>
        <span>
          ₦
          {order.items
            .reduce((sum, item) => sum + item.price * item.quantity, 0)
            .toFixed(2)}
        </span>
      </div>

      <button className="order-continue-btn" onClick={() => navigate("/shop")}>
        Continue Shopping
      </button>
    </div>
  );
}
