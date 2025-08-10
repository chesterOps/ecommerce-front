import CategoryCard from "../../CategoryCard/CategoryCard";
import Category from "./category";
import "./CategorySection.css";
import { AiOutlineDesktop } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import {
  IoCameraOutline,
  IoGameControllerOutline,
  IoHeadsetOutline,
  IoWatchOutline,
} from "react-icons/io5";

const CategorySection = () => {
  return (
    <div>
      <CategoryCard title="Categories" heading="Browse By Category" />
      <div className="container">
        <div className="row">
          <div className="col-sm-2 col-md-4 col-lg-6">
            <Category title="Phones" icon={<BsPhone size={56} />} />
          </div>
          <div className="col-sm-2 col-md-4 col-lg-6">
            <Category title="Computers" icon={<AiOutlineDesktop size={56} />} />
          </div>
          <div className="col-sm-2 col-md-4 col-lg-6">
            <Category title="SmartWatch" icon={<IoWatchOutline size={56} />} />
          </div>
          <div className="col-sm-2 col-md-4 col-lg-6">
            <Category title="Camera" icon={<IoCameraOutline size={56} />} />
          </div>
          <div className="col-sm-2 col-md-4 col-lg-6">
            <Category
              title="HeadPhones"
              icon={<IoHeadsetOutline size={56} />}
            />
          </div>
          <div className="col-sm-2 col-md-4 col-lg-6">
            <Category
              title="Games"
              icon={<IoGameControllerOutline size={56} />}
            />
          </div>
        </div>
        <div className="border"></div>
      </div>
    </div>
  );
};

export default CategorySection;
