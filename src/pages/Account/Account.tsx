import { useState } from "react";
import { BsCaretDownFill } from "react-icons/bs";
import { useNavigate, useSearchParams } from "react-router-dom";
import Profile from "../../components/AccountSections/Profile/Profile";
import "./Account.css";
import Orders from "../../components/AccountSections/Orders/Orders";
import Reviews from "../../components/AccountSections/Reviews/Reviews";

const Account: React.FC = () => {
  // const [activeSection, setActiveSection] = useState<string>("My Profile");
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [searchParams] = useSearchParams();
  const activeSection = searchParams.get("tab");
  const navigate = useNavigate();

  // Close sidebar when clicking on a menu item on mobile
  // const handleMenuItemClick = (section: string) => {
  //   setActiveSection(section);
  //   setSidebarOpen(false); // Close sidebar on mobile after selection
  // };

  const renderContent = () => {
    switch (activeSection) {
      case "My Profile":
        return <Profile />;
      case "My Orders":
        return <Orders />;
      case "My Reviews":
        return <Reviews />;

      default:
        return (
          <div className="placeholder-content">
            <h3>{activeSection}</h3>
            <p>This section is coming soon...</p>
          </div>
        );
    }
  };

  return (
    <div className="container">
      {/* Hamburger Menu - should be outside main-content for proper positioning */}

      {/* Overlay for mobile when sidebar is open */}
      {sidebarOpen && (
        <div className="overlay" onClick={() => setSidebarOpen(false)} />
      )}

      <div className="main-content">
        {/* Sidebar */}

        <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
          <h3 className="sidebar-title">Manage My Account</h3>
          <ul className="sidebar-list">
            <li
              className={`sidebar-item ${
                activeSection === "My Profile" ? "sidebar-item-active" : ""
              }`}
              onClick={() => navigate("/account?tab=My Profile")}
            >
              My Profile
            </li>

            <li
              className={`sidebar-item ${
                activeSection === "My Orders" ? "sidebar-item-active" : ""
              }`}
              onClick={() => navigate("/account?tab=My Orders")}
            >
              My Orders
            </li>
            <li
              className={`sidebar-item ${
                activeSection === "My Reviews" ? "sidebar-item-active" : ""
              }`}
              onClick={() => navigate("/account?tab=My Reviews")}
            >
              My Reviews
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <button
          className="hamburger"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle menu"
        >
          Menu <BsCaretDownFill size={12} fill="#818181" />
        </button>
        <div className="content">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Account;
