import CategoryCard from "../../CategoryCard/CategoryCard";
import ProductCard from "../../ProductCard/ProductCard";
import "./BestSellingProducts.css";

const BestSellingProducts = () => {
  return (
    <div className="best-selling">
      <CategoryCard
        title="This Month"
        heading="Best Selling Products"
        showButton
      />
      <div className="container">
        <div className="row product-row">
          <div className="col-lg-4 col-sm-2">
            <ProductCard
              title="The north coat"
              price={256.99}
              image="/src/assets/car.jpg"
              numberOfRatings={65}
              rating={5}
            />
          </div>
          <div className="col-lg-4 col-sm-2">
            <ProductCard
              title="Gucci duffle bag"
              price={960}
              image="/src/assets/car.jpg"
              numberOfRatings={65}
              rating={4}
            />
          </div>
          <div className="col-lg-4 col-sm-2">
            <ProductCard
              title="RGB liquid CPU Cooler"
              price={160}
              image="/src/assets/car.jpg"
              numberOfRatings={160}
              rating={4}
            />
          </div>
          <div className="col-lg-4 col-sm-2">
            <ProductCard
              title="Small BookSelf"
              price={360}
              image="/src/assets/car.jpg"
              numberOfRatings={65}
              rating={4}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellingProducts;
