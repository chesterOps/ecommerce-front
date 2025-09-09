// ProductDetailsSkeleton.jsx
import "./ProductDetailsLoader.css";

const ProductDetailsLoader = () => {
  return (
    <div className="product-details-skeleton">
      <div className="gallery-box">
        <div className="gallery">
          {/* Left gallery */}
          <div className="skeleton gallery-thumbnail"></div>
          <div className="skeleton gallery-thumbnail"></div>
          <div className="skeleton gallery-thumbnail"></div>
        </div>
        {/* Main image */}
        <div className="skeleton main-image"></div>
      </div>
      {/* Right details */}
      <div className="skeleton-details">
        <div className="skeleton skeleton-title"></div>
        <div className="skeleton skeleton-rating"></div>
        <div className="skeleton skeleton-price"></div>
        <div className="skeleton skeleton-text"></div>
        <div className="skeleton skeleton-text short"></div>
        <div className="skeleton skeleton-text"></div>
        <div className="skeleton skeleton-text short"></div>
      </div>
    </div>
  );
};

export default ProductDetailsLoader;
