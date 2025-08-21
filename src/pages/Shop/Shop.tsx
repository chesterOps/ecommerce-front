import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import Button from "../../components/Button/Button";
import "./Shop.css";


const categories = [
  "Women's Fashion",
  "Men's Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];

const sampleProducts = [
  {
    title: "Red Dress",
    price: 45,
    image: "src/assets/car.png",
    rating: 4,
    numberOfRatings: 120,
    isNew: true,
    discount: 10,
  },
  {
    title: "Men's Sneakers",
    price: 70,
    image: "src/assets/car.png",
    rating: 5,
    numberOfRatings: 240,
    discount: 15,
  },
  {
    title: "Wireless Headphones",
    price: 120,
    image: "src/assets/car.png",
    rating: 4,
    numberOfRatings: 95,
    isNew: true,
  },
  {
    title: "Luxury Sofa",
    price: 560,
    image: "src/assets/car.png",
    rating: 3,
    numberOfRatings: 34,
  },
];

export default function ShopPage() {
  return (
    <div className="shop-page">
      {categories.map((category) => (
        <section key={category} className="category-section2">
          
          <div className="category-header2">
            
            <div style={{display:"flex"}}>
              <div className="red-block"></div>
              <h2>{category}</h2>
            </div>
            <Link to={`/category/${category.replace(/\s+/g, "-").toLowerCase()}`} className="see-more">
              <Button title="See All" />
            </Link>
          </div>

          <div className="products-grid2">
            {sampleProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
