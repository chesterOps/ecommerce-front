import { useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import Button from "../../components/Button/Button";
import "./Contact.css";

// ✅ Type for form data
interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage(null);
    setError(null);

    try {
      const res = await fetch(
        "https://apiexclusive.onrender.com/api/v1/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setSuccessMessage("✅ Your message has been sent!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("❌ Something went wrong. Try again!");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container contact-box">
      <div className="Contact1">
        {/* Contact details */}
        <div className="contact-details">
          <div className="contact-details-top">
            <div className="contact-heading">
              <span>
                <IoCallOutline />
              </span>
              <h3>Call To Us</h3>
            </div>
            <p>We are available 24/7, 7 days a week.</p> <br />
            <p>Phone: +8801611112222</p>
          </div>
          <div className="contact-details-bottom">
            <div className="contact-heading">
              <span>
                <MdOutlineMail />
              </span>
              <h3>Write To Us</h3>
            </div>
            <p>
              Fill out our form and we will contact you within 24 hours. <br />{" "}
              <br /> Emails: customer@exclusive.com <br /> <br /> Emails:
              support@exclusive.com
            </p>
          </div>
        </div>
        {/* Contact form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-top">
            <input
              type="text"
              name="name"
              placeholder="Your Name*"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email*"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone*"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          />
          <div className="message-btn" onClick={handleSubmit}>
            <Button title={loading ? "Sending..." : "Send Message"} />
          </div>
          {/* ✅ Inline messages */}
          {successMessage && <p className="form-message">{successMessage}</p>}
          {error && <p className="form-message error">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
