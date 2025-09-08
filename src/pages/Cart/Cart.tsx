import React, { useState, type FormEvent } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  applyCoupon,
  deleteItem,
  getCartDiscount,
  getCartItems,
  getCoupon,
  removeCoupon,
  totalCartPrice,
  updateCart,
} from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const Cart: React.FC = () => {
  // Cart items
  const items = useSelector(getCartItems);

  const [pending, setPending] = useState(false);

  // Dispatch hook
  const dispatch = useDispatch();

  // Cart total
  const cartTotal = useSelector(totalCartPrice);

  const subTotal = useSelector(totalCartPrice);

  const cartDiscount = useSelector(getCartDiscount);

  const coupon = useSelector(getCoupon);

  const totalPrice = subTotal - (subTotal * cartDiscount) / 100;

  const handleApplyCoupon = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = Object.fromEntries(formData);

    if (!data.coupon) return;

    try {
      setPending(true);
      const response = await fetch(
        "https://apiexclusive.onrender.com/api/v1/coupons/apply",
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            cartTotal: subTotal,
            code: data.coupon,
          }),
        }
      );

      const resData = await response.json();

      if (!response.ok) throw new Error(resData.message);

      dispatch(
        applyCoupon(resData.data.coupon.code, resData.data.coupon.discount)
      );
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      } else {
        console.log("Unknown error occurred");
      }
    } finally {
      setPending(false);
    }
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
                    <Link to={`/shop/${item.slug}`}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="cart-img"
                      />
                    </Link>
                    <Link to={`/shop/${item.slug}`}>
                      <span className="cart-product-name">{item.title}</span>
                    </Link>
                  </div>
                  <span className="cart-price">
                    <span className="show-mobile">Price: </span>₦
                    {item.price.toFixed(2)}
                  </span>
                  <div className="cart-counter">
                    <span className="show-mobile">Quantity: </span>
                    <input
                      type="number"
                      min={1}
                      max={5}
                      defaultValue={item.quantity}
                      name={item.id}
                      className="cart-qty-input"
                    />
                  </div>
                  <span className="cart-subtotal">
                    <span className="show-mobile">Subtotal: </span>₦
                    {(item.price * item.quantity).toFixed(2)}
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
        {cartTotal > 0 && (
          <>
            {/* Coupon + Cart Total */}
            <div className="cart-bottom">
              {cartDiscount === 0 ? (
                <form
                  className="cart-coupon-section"
                  onClick={handleApplyCoupon}
                >
                  <input type="text" placeholder="Coupon Code" name="coupon" />
                  <button className="cart-apply-btn" type="submit">
                    {pending ? "Loading..." : "Apply Coupon"}
                  </button>
                </form>
              ) : (
                <div className="coupon-applied">
                  <span className="coupon-text">Coupon Applied: {coupon}</span>
                  <button
                    className="remove-coupon-btn"
                    onClick={() => dispatch(removeCoupon())}
                  >
                    X
                  </button>
                </div>
              )}

              <div className="cart-total">
                <h3>Cart Total</h3>
                <div className="total-row">
                  <span>Subtotal:</span>
                  <span>₦{cartTotal.toFixed(2)}</span>
                </div>
                {cartDiscount > 0 && (
                  <div className="total-row">
                    <span>Discount:</span>
                    <span>-₦{(subTotal - totalPrice).toFixed(2)}</span>
                  </div>
                )}
                <div className="total-row" id="shipping1">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <div className="total-row total">
                  <span>Total:</span>
                  <span>₦{totalPrice.toFixed(2)}</span>
                </div>

                <Link to="/checkout">
                  <button className="checkout-btn">Proceed to checkout</button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
