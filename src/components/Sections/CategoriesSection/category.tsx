import "./Category.css";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { AiOutlineCamera } from "react-icons/ai";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsSmartwatch } from "react-icons/bs";
import { LuGamepad } from "react-icons/lu";
import { IoHeadsetOutline } from "react-icons/io5";

interface CategoryProps {
  title: string;
}

const Category = ({ title }: CategoryProps) => {
  const getIcon = () => {
    switch (title.toLowerCase()) {
      case "phones":
        return <HiOutlineDevicePhoneMobile className="category-icon" />;
      case "camera":
        return <AiOutlineCamera className="category-icon" />;
      case "computer":
        return <HiOutlineDesktopComputer className="category-icon" />;
      case "watch":
        return <BsSmartwatch className="category-icon" />;
      case "games":
        return <LuGamepad className="category-icon" />;
      case "headset":
        return <IoHeadsetOutline className="category-icon" />;
      default:
        return null;
    }
  };

  return (
    <div className="category-card2">
      {getIcon()}
      <h3>{title}</h3>
    </div>
  );
};

export default Category;
