import React, { useState, useEffect } from "react";
import "./Order.css";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import { Link } from "react-router-dom";

interface Order {
  id: number;
  productName: string;
  date: string;
  status: "Pending" | "Shipped" | "Delivered";
  price: number;
  image: string;
}

const Orders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    // Dummy API data
    setOrders([
      {
        id: 1,
        productName: "Nike Air Max 270",
        date: "2025-08-10",
        status: "Delivered",
        price: 120,
        image: "src/assets/ps4.svg",
      },
      {
        id: 2,
        productName: "Samsung Galaxy S23",
        date: "2025-08-15",
        status: "Shipped",
        price: 899,
        image: "src/assets/car.png",
      },
      {
        id: 3,
        productName: "Adidas Ultraboost",
        date: "2025-08-18",
        status: "Pending",
        price: 180,
        image: "src/assets/gamepad.svg",
      },
    ]);
  }, []);

  return (
    <div className="orders-container">
      <CategoryCard
              title="My Orders"
            />
      <div className="orders-list">
        {orders.map((order) => (
          <div key={order.id} className="order-card">
            <img src={order.image} alt={order.productName} className="order-img" />
            <div className="order-details">
              <h3>{order.productName}</h3>
              <p className="order-date">Ordered on: {order.date}</p>
              <p className={`order-status ${order.status.toLowerCase()}`}>
                {order.status}
              </p>
              <p className="order-price">${order.price}</p>
            </div>

            {/* Buttons (only show Track Order if NOT delivered) */}
            {order.status !== "Delivered" && (
              <Link to={`/track-order/${order.id}`} className="track-btn">
              <button className="track-btn">Track Order</button>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
