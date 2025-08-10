import "./FlashSales.css";
import Button from "../../Button/Button";
import CategoryCard from "../../CategoryCard/CategoryCard";
import ProductCard from "../../ProductCard/ProductCard";
import ArrowControls from "../../ArrowButtons/ArrowControls";
import { useState, useEffect } from "react";

// All product data
const allProducts = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 49.99,
    image: "/src/assets/car.jpg",
    numberOfRatings: 140,
    rating: 4,
  },
  {
    id: 2,
    title: "Bluetooth Speaker",
    price: 59.99,
    image: "/src/assets/car.jpg",
    numberOfRatings: 120,
    rating: 5,
  },
  {
    id: 3,
    title: "Smart Watch",
    price: 99.99,
    image: "/src/assets/car.jpg",
    numberOfRatings: 200,
    rating: 4,
  },
  {
    id: 4,
    title: "Laptop Backpack",
    price: 39.99,
    image: "/src/assets/car.jpg",
    numberOfRatings: 80,
    rating: 4,
  },
  {
    id: 5,
    title: "Wireless Earbuds",
    price: 29.99,
    image: "/src/assets/car.jpg",
    numberOfRatings: 95,
    rating: 3,
  },
  {
    id: 6,
    title: "Power Bank",
    price: 24.99,
    image: "/src/assets/car.jpg",
    numberOfRatings: 150,
    rating: 4,
  },
];

const FlashSales = () => {
  const [index, setIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState("25% + 7.5px");
  const width = Number(slideWidth.split(" + ").at(0)?.replace("%", ""));

  useEffect(() => {
    const updateSlideWidth = () => {
      if (window.innerWidth >= 992) {
        setSlideWidth("25% + 7.5px"); // 4 cards per view
      } else if (window.innerWidth >= 480) {
        setSlideWidth("50% + 15px"); // 2 cards per view
      } else {
        setSlideWidth("100% + 30px"); // 1 card per view
      }
      setIndex(0);
    };

    updateSlideWidth(); // run once on mount
    window.addEventListener("resize", updateSlideWidth);

    return () => window.removeEventListener("resize", updateSlideWidth);
  }, []);

  const next = () => {
    if (index < allProducts.length - 100 / width) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="flash-sales">
      <CategoryCard
        title="Today's"
        heading="Flash Sales"
        controls={<ArrowControls onLeftClick={prev} onRightClick={next} />}
        showCounter
      />
      <div className="container">
        <div className="carousel-wrapper">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(calc(-${index} * (${slideWidth})))`,
              transition: "transform 0.4s ease",
            }}
          >
            {allProducts.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                numberOfRatings={product.numberOfRatings}
                rating={product.rating}
              />
            ))}
          </div>
        </div>
        <div className="button-container">
          <Button title="View All Products" />
        </div>
      </div>
    </div>
  );
};

export default FlashSales;
