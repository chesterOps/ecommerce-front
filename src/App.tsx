import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

export default function App() {
  return (
    <Router>
      <Navbar />
      <Breadcrumb />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:slug" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account" element={<Account />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
