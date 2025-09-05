import CategoryCard from "../../CategoryCard/CategoryCard";
import ProductCard from "../../ProductCard/ProductCard";
import { useEffect, useState } from "react";
import "./BestSellingProducts.css";
import ProductListLoader from "../../Loaders/ProductList/ProductLoader";

const BestSellingProducts = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://apiexclusive.onrender.com/api/v1/products/best-selling",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (data.status === "success") setProducts(data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="best-selling">
      <CategoryCard
        title="This Month"
        heading="Best Selling Products"
        showButton
      />
      <div className="container">
        {loading ? (
          <ProductListLoader />
        ) : (
          <>
            {products.length > 0 ? (
              <div className="row">
                {products.map((product, i) => (
                  <div className="col-lg-4 col-sm-2" key={i}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div>No products found.</div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default BestSellingProducts;
