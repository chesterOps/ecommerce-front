// ProductListLoader.jsx
import "./ProductLoader.css";

const ProductLoader = () => {
  return (
    <div className="product-loader">
      <div className="image-skeleton skeleton"></div>
      <div className="text-skeleton skeleton title"></div>
      <div className="text-skeleton skeleton price"></div>
    </div>
  );
};

const ProductListLoader = ({ count = 4 }) => {
  return (
    <div className="row">
      {Array.from({ length: count }).map((_, index) => (
        <div className="col-lg-4 col-sm-2" key={index}>
          <ProductLoader key={index} />
        </div>
      ))}
    </div>
  );
};

export default ProductListLoader;
