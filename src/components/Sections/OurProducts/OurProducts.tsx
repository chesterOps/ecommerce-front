import Button from "../../Button/Button";
import CategoryCard from "../../CategoryCard/CategoryCard";
import ProductCard from "../../ProductCard/ProductCard";
import "./OurProducts.css";


const OurProducts = () => {
  return (
    <div className="OurProducts">
      <CategoryCard title="Our Products" heading="Explore Our Products" />
      <div className="products-container">
        <ProductCard
          title="Wireless Headphones"
          price="$49.99"
          image="/src/assets/car.png"
          numberOfRatings={140}
          rating={4}
        />
        <ProductCard
          title="Wireless Headphones"
          price="$49.99"
          image="/src/assets/car.png"
          numberOfRatings={140}
          rating={4}
        />
        <ProductCard
          title="Wireless Headphones"
          price="$49.99"
          image="/src/assets/car.png"
          numberOfRatings={140}
          rating={4}
        />
        <ProductCard
          title="Wireless Headphones"
          price="$49.99"
          image="/src/assets/car.png"
          numberOfRatings={140}
          rating={4}
        />
        <ProductCard
          title="Wireless Headphones"
          price="$49.99"
          image="/src/assets/car.png"
          isNew={true}
          numberOfRatings={140}
          rating={4}
          colors={["#000000", "#ff0000", "#0000ff"]}
        />

        <ProductCard
          title="Wireless Headphones"
          price="$49.99"
          image="/src/assets/car.png"
          numberOfRatings={140}
          rating={4}
          colors={["#000000", "#ff0000", "#0000ff"]}
        />
        <ProductCard
          title="Wireless Headphones"
          price="$49.99"
          image="/src/assets/car.png"
          isNew={true}
          discount="-20%"
          numberOfRatings={140}
          rating={4}
          colors={["#000000", "#ff0000", "#0000ff"]}
        />
        <ProductCard
          title="Wireless Headphones"
          price="$49.99"
          image="/src/assets/car.png"
          numberOfRatings={140}
          rating={4}
          colors={["#000000", "#ff0000", "#0000ff"]}
        />
      </div>

      <div className="button-container">
        <Button title="View All Products" />
      </div>
    </div>
  );
};

export default OurProducts;
