import React from "react";
import "./TrackOrder.css";

interface TrackStep {
  label: string;
  status: "completed" | "current" | "upcoming";
}

const steps: TrackStep[] = [
  { label: "Pending", status: "completed" },
  { label: "Processing", status: "completed" },
  { label: "Shipped", status: "current" },
  { label: "Out for Delivery", status: "upcoming" },
  { label: "Delivered", status: "upcoming" },
];

const TrackOrder: React.FC = () => {
  return (
    <div className="track-container">
      <h2 className="track-title">Track Your Order</h2>

      <div className="track-progress">
        {steps.map((step, index) => (
          <div className="track-step" key={index}>
            <div
              className={`track-circle ${step.status}`}
            >
              {step.status === "completed" ? "✓" : index + 1}
            </div>
            <p className={`track-label ${step.status}`}>{step.label}</p>
            {index < steps.length - 1 && (
              <div
                className={`track-line ${steps[index + 1].status === "completed" ? "completed" : ""}`}
              ></div>
            )}
          </div>
        ))}
      </div>

      <div className="track-details">
        <h3>Order Details</h3>
        <p><strong>Order ID:</strong> #123456</p>
        <p><strong>Product:</strong> Nike Air Max 270</p>
        <p><strong>Estimated Delivery:</strong> 25th August, 2025</p>
      </div>
    </div>
  );
};

export default TrackOrder;
