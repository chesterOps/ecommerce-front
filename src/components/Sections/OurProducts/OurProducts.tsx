import Button from "../../Button/Button";
import CategoryCard from "../../CategoryCard/CategoryCard";
import ProductCard from "../../ProductCard/ProductCard";
import "./OurProducts.css";

const OurProducts = () => {
  return (
    <div className="OurProducts">
      <CategoryCard title="Our Products" heading="Explore Our Products" />
      <div className="container">
        <div className="row product-row">
          <div className="col-lg-4 col-sm-2">
            <ProductCard
              title="Wireless Headphones"
              price={49.99}
              image="/src/assets/car.jpg"
              numberOfRatings={140}
              rating={4}
            />
          </div>
          <div className="col-lg-4 col-sm-2">
            <ProductCard
              title="Wireless Headphones"
              price={49.99}
              image="/src/assets/car.jpg"
              numberOfRatings={140}
              rating={4}
            />
          </div>
          <div className="col-lg-4 col-sm-2">
            <ProductCard
              title="Wireless Headphones"
              price={49.99}
              image="/src/assets/car.jpg"
              numberOfRatings={140}
              rating={4}
            />
          </div>
          <div className="col-lg-4 col-sm-2">
            <ProductCard
              title="Wireless Headphones"
              price={49.99}
              image="/src/assets/car.jpg"
              numberOfRatings={140}
              rating={4}
            />
          </div>
          <div className="col-lg-4 col-sm-2">
            <ProductCard
              title="Wireless Headphones"
              price={49.99}
              image="/src/assets/car.jpg"
              isNew={true}
              numberOfRatings={140}
              rating={4}
              colors={["#184A48", "#DB4444"]}
            />
          </div>
          <div className="col-lg-4 col-sm-2">
            <ProductCard
              title="Wireless Headphones"
              price={49.99}
              image="/src/assets/car.jpg"
              numberOfRatings={140}
              rating={4}
              colors={["#184A48", "#DB4444"]}
            />
          </div>
          <div className="col-lg-4 col-sm-2">
            <ProductCard
              title="Wireless Headphones"
              price={49.99}
              image="/src/assets/car.jpg"
              isNew={true}
              discount={20}
              numberOfRatings={140}
              rating={4}
              colors={["#184A48", "#DB4444"]}
            />
          </div>
          <div className="col-lg-4 col-sm-2">
            <ProductCard
              title="Wireless Headphones"
              price={49.99}
              image="/src/assets/car.jpg"
              numberOfRatings={140}
              rating={4}
              colors={["#184A48", "#DB4444"]}
            />
          </div>
        </div>
      </div>
      <div className="button-container">
        <Button title="View All Products" />
      </div>
    </div>
  );
};

export default OurProducts;
