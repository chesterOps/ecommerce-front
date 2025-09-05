import React from "react";
import "./ArrowControls.css";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

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
        <IoArrowBack size={24} />
      </button>
      <button className="arrow-button" onClick={onRightClick}>
        <IoArrowForward size={24} />
      </button>
    </div>
  );
};

export default ArrowControls;
