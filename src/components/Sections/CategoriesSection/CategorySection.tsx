import CategoryCard from "../../CategoryCard/CategoryCard"
import Category from "./category"
import "./CategorySection.css"


const CategorySection = () => {
    return (
        <div className="category-section">
            <CategoryCard title="Categories" heading="Browse By Category" />
            <div className="categorycards">
                <Category title="Phones" />
                <Category title="Camera" />
                <Category title="Computer" />
                <Category title="Watch" />
                <Category title="Games" />
                <Category title="Headset" />
            </div>
        </div>
    )
}

export default CategorySection