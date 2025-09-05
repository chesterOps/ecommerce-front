import React from "react";
import "./Button.css";

interface ButtonProps {
  title: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ title, onClick, type = "button" }) => {
  return (
    <button className="main-button" onClick={onClick} type={type}>
      {title}
    </button>
  );
};

export default Button;
