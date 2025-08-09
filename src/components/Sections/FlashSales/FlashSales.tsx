import { useState } from "react";
import Button from "../../Button/Button";
import CategoryCard from "../../CategoryCard/CategoryCard";
import ProductCard from "../../ProductCard/ProductCard";
import "./FlashSales.css";

const FlashSales = () => {
  // All product data
  const allProducts = [
    {
      id: 1,
      title: "Wireless Headphones",
      price: "$49.99",
      image: "/src/assets/car.png",
      numberOfRatings: 140,
      rating: 4
    },
    {
      id: 2,
      title: "Bluetooth Speaker",
      price: "$59.99",
      image: "/src/assets/car.png",
      numberOfRatings: 120,
      rating: 5
    },
    {
      id: 3,
      title: "Smart Watch",
      price: "$99.99",
      image: "/src/assets/car.png",
      numberOfRatings: 200,
      rating: 4
    },
    {
      id: 4,
      title: "Laptop Backpack",
      price: "$39.99",
      image: "/src/assets/car.png",
      numberOfRatings: 80,
      rating: 4
    },
    {
      id: 5,
      title: "Wireless Earbuds",
      price: "$29.99",
      image: "/src/assets/car.png",
      numberOfRatings: 95,
      rating: 3
    },
    {
      id: 6,
      title: "Power Bank",
      price: "$24.99",
      image: "/src/assets/car.png",
      numberOfRatings: 150,
      rating: 4
    }
  ];

  // State for current visible products
  const [visibleProducts, setVisibleProducts] = useState(allProducts.slice(0, 4));
  
  // Function to handle next button click
  const showNextProducts = () => {
    const currentLastIndex = allProducts.findIndex(
      product => product.id === visibleProducts[visibleProducts.length - 1].id
    );
    
    if (currentLastIndex < allProducts.length - 1) {
      const nextIndex = currentLastIndex + 1;
      const newVisibleProducts = allProducts.slice(nextIndex, nextIndex + 4);
      setVisibleProducts(newVisibleProducts.length >= 4 ? newVisibleProducts : [
        ...newVisibleProducts,
        ...allProducts.slice(0, 4 - newVisibleProducts.length)
      ]);
    } else {
      // If we're at the end, loop back to the beginning
      setVisibleProducts(allProducts.slice(0, 4));
    }
  };
  
  // Function to handle previous button click
  const showPrevProducts = () => {
    const currentFirstIndex = allProducts.findIndex(
      product => product.id === visibleProducts[0].id
    );
    
    if (currentFirstIndex > 0) {
      const prevIndex = currentFirstIndex - 1;
      setVisibleProducts(allProducts.slice(prevIndex, prevIndex + 4));
    } else {
      // If we're at the start, loop to the end
      const startIndex = allProducts.length - 4;
      setVisibleProducts(allProducts.slice(startIndex));
    }
  };

  return (
    <div className="OurProducts">
      <CategoryCard
        title="Today`s"
        heading="Flash Sale"
        showArrows
        showCounter
      />
      
      <div className="products-container">
        {visibleProducts.map((product) => (
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

      <div className="button-container">
        <Button title="View All Products" />
      </div>
    </div>
  );
};

export default FlashSales;