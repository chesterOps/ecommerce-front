//import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
//import Button from "../../components/Button/Button";
import "./Shop.css";
import { useEffect, useState } from "react";

export default function ShopPage() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://apiexclusive.onrender.com/api/v1/products",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();

        if (data.status === "success") {
          setProducts(data.data);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div className="shop-page">
      <section className="container">
        <div className="row">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <>
              {products.length > 0 ? (
                <>
                  {products.map((product, index) => (
                    <div className="col-lg-4 col-sm-2">
                      <ProductCard key={index} product={product} />
                    </div>
                  ))}
                </>
              ) : (
                <div>Products not found</div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
