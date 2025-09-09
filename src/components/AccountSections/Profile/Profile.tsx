import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getUser, setUser } from "../../../features/auth/userSlice";
import { useDispatch } from "react-redux";

interface FormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export default function Profile() {
  const user = useSelector(getUser);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<FormData>({
    name: user?.name ?? "",
    phone: user?.phone ?? "",
    email: user?.email ?? "",
    address: user?.address ?? "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveChanges = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (
      formData.newPassword &&
      formData.newPassword !== formData.confirmPassword
    ) {
      toast.error("Passwords do not match");
      return;
    }

    if (formData.newPassword && !formData.currentPassword) {
      toast.error("Current password is required to change password");
      return;
    }

    // Construct data
    const profileData: { [key: string]: string } = {
      name: formData.name,
      currentPassword: formData.currentPassword,
      newPassword: formData.newPassword,
      confirmNewPassword: formData.confirmPassword,
    };

    if (user?.email !== formData.email) profileData.email = formData.email;
    if (user?.phone !== formData.phone) profileData.phone = formData.phone;
    if (user?.address !== formData.address)
      profileData.address = formData.address;

    try {
      setLoading(true);
      const response = await fetch(
        "https://apiexclusive.onrender.com/api/v1/auth/update-profile",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(profileData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Update failed");
      }

      // Set success message
      toast.success(data.message);

      // Update user
      if (user) {
        dispatch(
          setUser({
            ...user,
            email: profileData.email ? profileData.email : user.email,
            phone: profileData.phone ? profileData.phone : user.phone,
            address: profileData.address ? profileData.address : user.address,
          })
        );
      }
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSaveChanges}>
      <h2 className="content-title">Edit Your Profile</h2>
      <div className="form-row">
        <div className="form-group">
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter name"
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <label className="label">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Enter phone"
            className="input"
            required
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
            placeholder="Enter email"
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <label className="label">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Enter address"
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
        <button className="button button-cancel" type="button">
          Cancel
        </button>
        <button
          onClick={handleSaveChanges}
          className="button button-save"
          type="submit"
        >
          {loading ? "Saving..." : " Save Changes"}
        </button>
      </div>
    </form>
  );
}
