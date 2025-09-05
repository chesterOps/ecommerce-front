import ProductCard from "../../components/ProductCard/ProductCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductListLoader from "../../components/Loaders/ProductList/ProductLoader";

export default function Category() {
  const params = useParams<{ category: string }>();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://apiexclusive.onrender.com/api/v1/products/category/${params.category}`,
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
  }, [params.category]);
  return (
    <div className="shop-page">
      <section className="container">
        <>
          {loading ? (
            <ProductListLoader count={8} />
          ) : (
            <div className="row">
              {products.length > 0 ? (
                <>
                  {products.map((product, index) => (
                    <div className="col-lg-4 col-sm-2">
                      <ProductCard key={index} product={product} />
                    </div>
                  ))}
                </>
              ) : (
                <div className="col-12">No products found in this category</div>
              )}
            </div>
          )}
        </>
      </section>
    </div>
  );
}
