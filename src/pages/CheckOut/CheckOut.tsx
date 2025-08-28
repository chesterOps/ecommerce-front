import Button from "../../components/Button/Button";
import "./CheckOut.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getCartItems, totalCartPrice } from "../../features/cart/cartSlice";

const CheckOut = () => {
  const [form, setForm] = useState({
    firstName: "",
    company: "",
    street: "",
    apartment: "",
    city: "",
    phone: "",
    email: "",
  });

  const cart = useSelector(getCartItems);

  const totalPrice = useSelector(totalCartPrice);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    if (
      !form.firstName ||
      !form.street ||
      !form.city ||
      !form.phone ||
      !form.email
    ) {
      alert("Please fill in all required fields!");
      return;
    }
  };

  return (
    <div className="container checkout-box">
      <h1>Billing Details</h1>
      <div className="checkout-grid">
        {/* Left Side: Form */}
        <div className="checkout-form">
          <div>
            <label>
              First Name <sup>*</sup>
            </label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Company Name</label>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>
              Street Address <sup>*</sup>
            </label>
            <input
              type="text"
              name="street"
              value={form.street}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Apartment, floor, etc. (optional)</label>
            <input
              type="text"
              name="apartment"
              value={form.apartment}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>
              Town/City <sup>*</sup>
            </label>
            <input
              type="text"
              name="city"
              value={form.city}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>
              Phone Number <sup>*</sup>
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>
              Email Address <sup>*</sup>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="save-info">
            <input
              type="checkbox"
              id="save"
              style={{ cursor: "pointer", accentColor: "#db4444" }}
            />
            <label htmlFor="save" style={{ color: "black", marginBottom: 0 }}>
              Save this information for faster check-out next time
            </label>
          </div>
        </div>

        {/* Right Side: Order Summary */}
        <div className="checkout-summary">
          <div className="checkout-products">
            {cart.map((item, index) => (
              <div key={index} className="check-out-item">
                <div>
                  <img src={item.image} alt={item.title} />
                  <p>{item.title}</p>
                </div>
                <span className="price">
                  {(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}

            <div className="checkout-totals">
              <p>Subtotal:</p>{" "}
              <span className="price">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="checkout-totals">
              <p>Shipping:</p> <span className="price">Free</span>
            </div>
            <div className="checkout-totals total">
              <p>Total:</p>{" "}
              <span className="price">${totalPrice.toFixed(2)}</span>
            </div>

            <div className="payment-method">
              <div className="bank">
                <div>
                  <input
                    type="radio"
                    name="payment"
                    className="radio"
                    defaultChecked
                  />
                  <label>Bank</label>
                </div>
                <img src="/payments.svg" alt="" />
              </div>
              <div>
                <input type="radio" name="payment" className="radio" />
                <label>Cash on delivery</label>
              </div>
            </div>
          </div>
          <div className="checkout-buttons">
            <div className="checkout-coupon">
              <input type="text" placeholder="Coupon Code" />
              <Button title="Apply Coupon" />
            </div>
            <div className="checkout-button">
              <Button title="Place Order" onClick={handlePlaceOrder} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
