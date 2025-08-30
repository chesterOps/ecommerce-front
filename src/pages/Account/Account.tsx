import { useState } from "react";
import "./Account.css";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const Account: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("My Profile");
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    // Basic validation
    if (
      formData.newPassword &&
      formData.newPassword !== formData.confirmPassword
    ) {
      setMessage("Passwords do not match");
      return;
    }

    if (formData.newPassword && !formData.currentPassword) {
      setMessage("Current password is required to change password");
      return;
    }

    // Simulate saving
    setMessage("Changes saved successfully!");
    setTimeout(() => setMessage(""), 3000);
  };

  const handleCancel = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
    setMessage("Changes cancelled");
    setTimeout(() => setMessage(""), 3000);
  };

  // Close sidebar when clicking on a menu item on mobile
  const handleMenuItemClick = (section: string) => {
    setActiveSection(section);
    setSidebarOpen(false); // Close sidebar on mobile after selection
  };

  const renderContent = () => {
    switch (activeSection) {
      case "My Profile":
        return (
          <>
            <h2 className="content-title">Edit Your Profile</h2>

            {message && <div className="message">{message}</div>}

            <div className="form-row">
              <div className="form-group">
                <label className="label">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Md"
                  className="input"
                />
              </div>
              <div className="form-group">
                <label className="label">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Rimel"
                  className="input"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="rimel111@gmail.com"
                  className="input"
                />
              </div>
              <div className="form-group">
                <label className="label">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Kingston, 5236, United State"
                  className="input"
                />
              </div>
            </div>

            <div className="password-section">
              <h3 className="password-title">Password Changes</h3>

              <div className="form-group">
                <input
                  type="password"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleInputChange}
                  placeholder="Current Password"
                  className="input"
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleInputChange}
                  placeholder="New Password"
                  className="input"
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm New Password"
                  className="input"
                />
              </div>
            </div>

            <div className="button-group">
              <button
                onClick={handleCancel}
                className="button button-cancel"
                type="button"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveChanges}
                className="button button-save"
                type="button"
              >
                Save Changes
              </button>
            </div>
          </>
        );
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
      <button
        className="hamburger"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

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
              onClick={() => handleMenuItemClick("My Profile")}
            >
              My Profile
            </li>
            <li
              className={`sidebar-item ${
                activeSection === "Address Book" ? "sidebar-item-active" : ""
              }`}
              onClick={() => handleMenuItemClick("Address Book")}
            >
              Address Book
            </li>
            <li
              className={`sidebar-item ${
                activeSection === "My Payment Options"
                  ? "sidebar-item-active"
                  : ""
              }`}
              onClick={() => handleMenuItemClick("My Payment Options")}
            >
              My Payment Options
            </li>
          </ul>

          <h3 className="sidebar-title">My Orders</h3>
          <ul className="sidebar-list">
            <li
              className={`sidebar-item ${
                activeSection === "My Returns" ? "sidebar-item-active" : ""
              }`}
              onClick={() => handleMenuItemClick("My Returns")}
            >
              My Returns
            </li>
            <li
              className={`sidebar-item ${
                activeSection === "My Cancellations"
                  ? "sidebar-item-active"
                  : ""
              }`}
              onClick={() => handleMenuItemClick("My Cancellations")}
            >
              My Cancellations
            </li>
          </ul>

          <h3 className="sidebar-title">My Wishlist</h3>
        </aside>

        {/* Main Content */}
        <div className="content">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Account;
