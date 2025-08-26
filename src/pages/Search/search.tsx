import ProductCard from "../../components/ProductCard/ProductCard";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./search.css";

interface Product {
  title: string;
  _id: string;
  price: number;
  images: {
    url: string;
    public_id: string;
  }[];
  slug: string;
  createdAt: Date;
  discount?: number;
  colors?: string[];
}

export default function Search() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // get search query from URL
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("q")?.toLowerCase() || "";

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const res = await fetch(
          `https://apiexclusive.onrender.com/api/v1/products?search=${query}`
        );
        const data = await res.json();
        setProducts(data.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [query]);

  return (
    <div className="container">
      <div className="search-page">
        <h2 className="search-title">
          Search Results {query ? `for "${query}"` : ""}
        </h2>
        {loading ? (
          <p className="loading">Searching...</p>
        ) : (
          <>
            {products.length > 0 ? (
              <div className="row">
                {products.map((product, index) => (
                  <div className="col-lg-4 col-sm-2" key={index}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <p className="no-results">No products found for "{query}"</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
