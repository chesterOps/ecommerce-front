import Button from "../../Button/Button";
import CategoryCard from "../../CategoryCard/CategoryCard";
import ProductCard from "../../ProductCard/ProductCard";
import "./OurProducts.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductListLoader from "../../Loaders/ProductList/ProductLoader";

const OurProducts = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://apiexclusive.onrender.com/api/v1/products?limit=8",
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
    <div className="OurProducts">
      <CategoryCard title="Our Products" heading="Explore Our Products" />
      <div className="container">
        {loading ? (
          <ProductListLoader count={8} />
        ) : (
          <div className="row product-row">
            {products.length > 0 ? (
              <>
                {products.map((product, index) => (
                  <div className="col-lg-4 col-sm-2" key={index}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </>
            ) : (
              <div>No products found</div>
            )}
          </div>
        )}
      </div>
      <div className="button-container">
        <Button title="View All Products" onClick={() => navigate("/shop")} />
      </div>
    </div>
  );
};

export default OurProducts;
