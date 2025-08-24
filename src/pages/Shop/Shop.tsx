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
    title: "Wireless Headphones",
    price: 120,
    images: [
      {
        url: "src/assets/car.png",
        public_id: "headphones1"
      }
    ],
    slug: "wireless-headphones",
    createdAt: new Date(),
    discount: 20,
    colors: ["black", "white"]
  },
  {
    title: "Smart Watch",
    price: 250,
    images: [
      {
        url: "src/assets/car.png",
        public_id: "smartwatch1"
      }
    ],
    slug: "smart-watch",
    createdAt: new Date(),
    discount: 15,
    colors: ["silver", "black"]
  },
  {
    title: "Gaming Mouse",
    price: 60,
    images: [
      {
        url: "src/assets/car.png",
        public_id: "mouse1"
      }
    ],
    slug: "gaming-mouse",
    createdAt: new Date(),
    colors: ["red", "blue"]
  },
  {
    title: "Bluetooth Speaker",
    price: 180,
    images: [
      {
        url: "src/assets/car.png",
        public_id: "speaker1"
      }
    ],
    slug: "bluetooth-speaker",
    createdAt: new Date(),
    discount: 10
  }
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
    <ProductCard key={index} product={product} />
  ))}
</div>

        </section>
      ))}
    </div>
  );
}
