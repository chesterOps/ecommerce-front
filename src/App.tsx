import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Breadcrumb from "./components/BreadCrumb/Breadcrumb";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/CheckOut/CheckOut";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Account from "./pages/Account/Account";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Wishlist from "./pages/Wishlist/Wishlist";
import NotFound from "./pages/404Page/404Page";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Order from "./pages/Orders/Order";
import TrackOrder from "./pages/TrackOrder/TrackOrder";
import Shop from "./pages/Shop/Shop";
import Category from "./pages/Category/Category";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import SearchPage from "./pages/Search/SearchPage";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "./features/auth/userSlice";
import { ToastContainer } from "react-toastify";

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
