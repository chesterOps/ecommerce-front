import React from "react";
import "./ArrowControls.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface ArrowControlsProps {
  onLeftClick?: () => void;
  onRightClick?: () => void;
}

const ArrowControls: React.FC<ArrowControlsProps> = ({
  onLeftClick,
  onRightClick,
}) => {
  return (
    <div className="arrow-controls">
      <button className="arrow-button" onClick={onLeftClick}>
        <FaArrowLeft />
      </button>
      <button className="arrow-button" onClick={onRightClick}>
        <FaArrowRight />
      </button>
    </div>
  );
};

export default ArrowControls;
