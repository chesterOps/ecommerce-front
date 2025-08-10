import React, { useState } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart: React.FC = () => {
  const [items, setItems] = useState([
    { id: 1, name: "LCD Monitor", price: 650, qty: 1, img: "/src/assets/gamepad.svg" },
    { id: 2, name: "H1 Gamepad", price: 550, qty: 2, img: "/src/assets/gamepad.svg" }
  ]);

  const updateQty = (id: number, newQty: number) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, qty: newQty } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  const applyCoupon = () => {
    alert("Coupon applied! (demo only)");
  };

  const updateCart = () => {
    alert("Cart updated! (demo only)");
  };

  return (
   <div className="container"> <div className="cart-page">
      {/* Cart Table */}
      <div className="cart-table">
        <div className="cart-header">
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Subtotal</span>
        </div>

        {items.map(item => (
          <div key={item.id} className="cart-item">
            <div className="cart-product">
              <button
                className="remove-btn"
                onClick={() => removeItem(item.id)}
              >
                ×
              </button>
              <img
                src={item.img}
                alt={item.name}
                className="cart-img"
              />
              <span className="cart-product-name">{item.name}</span>
            </div>
            <span className="cart-price">${item.price}</span>
            <div className="cart-counter">
              <input
                type="number"
                min={1}
                value={item.qty}
                onChange={(e) => updateQty(item.id, Number(e.target.value))}
                className="cart-qty-input"
              />
            </div>
            <span className="cart-subtotal">${item.price * item.qty}</span>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="cart-buttons">
        <Link to="/shop">
          <button className="return-btn">Return To Shop</button>
        </Link>
        <button className="update-btn" onClick={updateCart}>Update Cart</button>
      </div>

      {/* Coupon + Cart Total */}
      <div className="cart-bottom">
        <div className="coupon-section">
          <input type="text" placeholder="Coupon Code" />
          <button className="apply-btn" onClick={applyCoupon}>Apply Coupon</button>
        </div>

        <div className="cart-total">
          <h3>Cart Total</h3>
          <div className="total-row">
            <span>Subtotal:</span>
            <span>${subtotal}</span>
          </div>
          <div className="total-row" id="shipping1">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="total-row total">
            <span>Total:</span>
            <span>${subtotal}</span>
          </div>
         <Link to="/checkout">
          <button className="checkout-btn">
            Proceed to checkout
          </button>
          </Link>
        </div>
      </div>
    </div></div>
  );
};

export default Cart;
