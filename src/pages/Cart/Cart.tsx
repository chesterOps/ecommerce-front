import React, { type FormEvent } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  deleteItem,
  getCartItems,
  totalCartPrice,
  updateCart,
} from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const Cart: React.FC = () => {
  // Cart items
  const items = useSelector(getCartItems);

  // Dispatch hook
  const dispatch = useDispatch();

  // Cart total
  const cartTotal = useSelector(totalCartPrice);

  const applyCoupon = () => {
    alert("Coupon applied! (demo only)");
  };

  const setCart = (e: FormEvent<HTMLFormElement>) => {
    // Prevent default submit
    e.preventDefault();

    // Get values from cart
    const formData = new FormData(e.currentTarget);

    const data = Object.fromEntries(formData.entries());

    // Make new cart
    const newItems = items.map((item) => {
      if (data[item.id]) return { ...item, quantity: Number(data[item.id]) };
      else return item;
    });

    // Update cart
    dispatch(updateCart(newItems));
  };

  return (
    <div className="container">
      <div className="cart-page">
        {/* Cart Table */}
        <div className="cart-table">
          <div className="cart-header">
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Subtotal</span>
          </div>
          {items.length > 0 ? (
            <form id="cart-form" onSubmit={setCart}>
              {items.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-product">
                    <button
                      className="remove-btn"
                      onClick={() => dispatch(deleteItem(item.id))}
                    >
                      ×
                    </button>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="cart-img"
                    />
                    <span className="cart-product-name">{item.title}</span>
                  </div>
                  <span className="cart-price">${item.price}</span>
                  <div className="cart-counter">
                    <input
                      type="number"
                      min={1}
                      defaultValue={item.quantity}
                      name={item.id}
                      className="cart-qty-input"
                    />
                  </div>
                  <span className="cart-subtotal">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </form>
          ) : (
            <div>No items in the cart</div>
          )}
        </div>
        {/* Buttons */}
        <div className="cart-buttons">
          <Link to="/shop">
            <button className="return-btn">Return To Shop</button>
          </Link>
          {items.length > 0 && (
            <button className="update-btn" type="submit" form="cart-form">
              Update Cart
            </button>
          )}
        </div>

        {/* Coupon + Cart Total */}
        <div className="cart-bottom">
          <div className="coupon-section">
            <input type="text" placeholder="Coupon Code" />
            <button className="apply-btn" onClick={applyCoupon}>
              Apply Coupon
            </button>
          </div>
          {cartTotal > 0 && (
            <div className="cart-total">
              <h3>Cart Total</h3>
              <div className="total-row">
                <span>Subtotal:</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="total-row" id="shipping1">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="total-row total">
                <span>Total:</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>

              <Link to="/checkout">
                <button className="checkout-btn">Proceed to checkout</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
