import Button from "../../components/Button/Button";
import "./CheckOut.css";
import { useState, type FormEvent } from "react";
import { useSelector } from "react-redux";
import {
  applyCoupon,
  getCartDiscount,
  getCartItems,
  getCoupon,
  removeCoupon,
  totalCartPrice,
} from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { getUser, setUser } from "../../features/auth/userSlice";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
  const user = useSelector(getUser);

  const billingAddress = user?.billingAddress;
  const [form, setForm] = useState({
    firstName: billingAddress?.name ?? "",
    companyName: billingAddress?.companyName ?? "",
    addressLine1: billingAddress?.addressLine1 ?? "",
    addressLine2: billingAddress?.addressLine2 ?? "",
    city: billingAddress?.city ?? "",
    phone: billingAddress?.phone ?? "",
    email: billingAddress?.email ?? "",
  });

  const [paymentType, setPaymentType] = useState("card");

  const [saveAddress, setSaveAddress] = useState(false);

  const [pending, setPending] = useState(false);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const cart = useSelector(getCartItems);

  const subTotal = useSelector(totalCartPrice);

  const cartDiscount = useSelector(getCartDiscount);

  const coupon = useSelector(getCoupon);

  const totalPrice = subTotal - (subTotal * cartDiscount) / 100;

  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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

  const handlePlaceOrder = async () => {
    if (
      !form.firstName ||
      !form.addressLine1 ||
      !form.city ||
      !form.phone ||
      !form.email
    ) {
      toast.error("Please fill in all required fields!");
      return;
    }

    // Get items
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const items = cart.map(({ id, slug, ...rest }) => ({
      ...rest,
      product: id,
    }));

    try {
      setLoading(true);
      const response = await fetch(
        "https://apiexclusive.onrender.com/api/v1/orders/checkout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            firstName: form.firstName,
            email: form.email,
            amount: totalPrice,
            phone: form.phone,
            companyName: form.companyName,
            city: form.city,
            addressLine1: form.addressLine1,
            addressLine2: form.addressLine2,
            items,
            paymentMethod: paymentType,
            saveAddress,
          }),
        }
      );

      const resData = await response.json();

      if (!response.ok) throw new Error(resData.message);

      if (resData.method === "card")
        return (window.location = resData.data.data.link);
      else {
        if (saveAddress) {
          // Add billing address
          if (user)
            dispatch(
              setUser({
                ...user,
                billingAddress: {
                  name: form.firstName,
                  addressLine1: form.addressLine1,
                  phone: form.phone,
                  email: form.email,
                  companyName: form.companyName,
                  addressLine2: form.addressLine2,
                  city: form.city,
                },
              })
            );
        }
        navigate(`/order-confirm/${resData.data._id}`);
      }
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      } else {
        console.log("Unknown error occurred");
      }
    } finally {
      setLoading(false);
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
              name="companyName"
              value={form.companyName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>
              Street Address <sup>*</sup>
            </label>
            <input
              type="text"
              name="addressLine1"
              value={form.addressLine1}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Apartment, floor, etc. (optional)</label>
            <input
              type="text"
              name="addressLine2"
              value={form.addressLine2}
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
          {!user?.billingAddress && (
            <div className="save-info">
              <input
                type="checkbox"
                id="save"
                style={{ cursor: "pointer", accentColor: "#db4444" }}
                name="saveAddress"
                checked={saveAddress}
                onChange={() => setSaveAddress((s) => !s)}
              />
              <label htmlFor="save" style={{ color: "black", marginBottom: 0 }}>
                Save this information for faster check-out next time
              </label>
            </div>
          )}
        </div>

        {/* Right Side: Order Summary */}
        <div className="checkout-summary">
          <div className="checkout-products">
            {cart.map((item, index) => (
              <div key={index} className="check-out-item">
                <div>
                  <img src={item.image} alt={item.title} />
                  <p>
                    {item.title} ({item.quantity})
                  </p>
                </div>
                <span className="price">
                  ₦{(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}

            <div className="checkout-totals">
              <p>Subtotal:</p>{" "}
              <span className="price">₦{subTotal.toFixed(2)}</span>
            </div>
            {cartDiscount > 0 && (
              <div className="checkout-totals">
                <p>Discount: </p>
                <span className="price">
                  -₦{(subTotal - totalPrice).toFixed(2)}
                </span>
              </div>
            )}
            <div className="checkout-totals">
              <p>Shipping:</p> <span className="price">Free</span>
            </div>
            <div className="checkout-totals total">
              <p>Total:</p>{" "}
              <span className="price">₦{totalPrice.toFixed(2)}</span>
            </div>

            <div className="payment-method">
              <div className="bank">
                <div>
                  <input
                    type="radio"
                    name="payment"
                    className="radio"
                    checked={paymentType === "card"}
                    onChange={() => setPaymentType("card")}
                  />
                  <label>Card</label>
                </div>
                <img src="/payments.svg" alt="" />
              </div>
              <div>
                <input
                  type="radio"
                  name="payment"
                  className="radio"
                  checked={paymentType === "cash-on-delivery"}
                  onChange={() => setPaymentType("cash-on-delivery")}
                />
                <label>Cash on delivery</label>
              </div>
            </div>
          </div>
          <div className="checkout-buttons">
            {cartDiscount === 0 ? (
              <form className="checkout-coupon" onSubmit={handleApplyCoupon}>
                <input type="text" placeholder="Coupon Code" name="coupon" />
                <Button
                  type="submit"
                  title={pending ? "Loading..." : "Apply Coupon"}
                />
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
            <div className="checkout-button">
              <Button
                title={loading ? "Loading..." : "Place Order"}
                onClick={handlePlaceOrder}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
