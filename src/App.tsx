import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Breadcrumb from "./components/BreadCrumb/Breadcrumb";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { setUser } from "./features/auth/userSlice";
import NotFound from "./pages/404Page/404Page";
import About from "./pages/About/About";
import Account from "./pages/Account/Account";
import Cart from "./pages/Cart/Cart";
import Category from "./pages/Category/Category";
import Checkout from "./pages/CheckOut/CheckOut";
import Contact from "./pages/Contact/Contact";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import OrderConfirm from "./pages/OrderConfirm/OrderConfirm";
import Order from "./pages/Orders/Order";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import SearchPage from "./pages/Search/SearchPage";
import Shop from "./pages/Shop/Shop";
import Signup from "./pages/Signup/Signup";
import TrackOrder from "./pages/TrackOrder/TrackOrder";
import Wishlist from "./pages/Wishlist/Wishlist";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await fetch(
          `https://apiexclusive.onrender.com/api/v1/auth/get-profile`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );

        const data = await response.json();

        if (data.status === "success") dispatch(setUser(data.data));
      } catch (err) {
        console.log(err);
      }
    };
    getProfile();
  }, [dispatch]);

  return (
    <Router>
      <ScrollToTop />
      <ToastContainer
        position="top-left"
        toastStyle={{
          fontFamily: "Poppins",
        }}
        autoClose={3000}
      />
      <Navbar />
      <Breadcrumb />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/shop/:slug" element={<ProductDetails />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account" element={<Account />} />
          <Route path="/about" element={<About />} />
          <Route path="/order-confirm/:orderId" element={<OrderConfirm />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/track-order/:orderId" element={<TrackOrder />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
