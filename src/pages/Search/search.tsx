import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./search.css";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default function Search() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // get search query from URL
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("q")?.toLowerCase() || "";

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  // filter products when query or products change
  useEffect(() => {
    if (query) {
      setFilteredProducts(
        products.filter((p) =>
          p.title.toLowerCase().includes(query)
        )
      );
    } else {
      setFilteredProducts(products);
    }
  }, [query, products]);

  return (
    <div className="search-page">
      <h2 className="search-title">
        Search Results {query ? `for "${query}"` : ""}
      </h2>

      {loading ? (
        <p className="loading">Loading products...</p>
      ) : filteredProducts.length > 0 ? (
        <div className="products-grid">
          {filteredProducts.map((p) => (
            <ProductCard
              key={p.id}
              title={p.title}
              price={p.price}
              image={p.image}
              rating={Math.round(p.rating.rate)}
              numberOfRatings={p.rating.count}
              isNew={p.id % 2 === 0} // dummy
              discount={p.id % 3 === 0 ? 10 : undefined} // dummy
              colors={["#000", "#f00", "#00f"]} // dummy
            />
          ))}
        </div>
      ) : (
        <p className="no-results">No products found for "{query}"</p>
      )}
    </div>
  );
}
