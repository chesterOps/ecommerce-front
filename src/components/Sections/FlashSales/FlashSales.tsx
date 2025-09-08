import "./FlashSales.css";
import Button from "../../Button/Button";
import CategoryCard from "../../CategoryCard/CategoryCard";
import ProductCard from "../../ProductCard/ProductCard";
import ArrowControls from "../../ArrowButtons/ArrowControls";
import ProductListLoader from "../../Loaders/ProductList/ProductLoader";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FlashSales = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [endDate, setEndDate] = useState<Date | string>("");
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState("25% + 7.5px");
  const width = Number(slideWidth.split(" + ").at(0)?.replace("%", ""));

  const fetchFlashSales = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://apiexclusive.onrender.com/api/v1/flashsale",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (data.status === "success") {
        setEndDate(data.data.end);
        setProducts(data.data.products);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFlashSales();
  }, []);

  useEffect(() => {
    const updateSlideWidth = () => {
      if (window.innerWidth >= 992) {
        setSlideWidth("25% + 7.5px"); // 4 cards per view
      } else if (window.innerWidth >= 480) {
        setSlideWidth("50% + 15px"); // 2 cards per view
      } else {
        setSlideWidth("100% + 30px"); // 1 card per view
      }
      setIndex(0);
    };

    updateSlideWidth(); // run once on mount
    window.addEventListener("resize", updateSlideWidth);

    return () => window.removeEventListener("resize", updateSlideWidth);
  }, []);

  const next = () => {
    if (index < products.length - 100 / width) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="flash-sales">
      <CategoryCard
        title="Today's"
        heading="Flash Sales"
        controls={<ArrowControls onLeftClick={prev} onRightClick={next} />}
        endDate={endDate}
      />
      <div className="container">
        <div className="carousel-wrapper">
          {loading ? (
            <ProductListLoader />
          ) : (
            <>
              {products.length > 0 ? (
                <div
                  className="carousel-track"
                  style={{
                    transform: `translateX(calc(-${index} * (${slideWidth})))`,
                    transition: "transform 0.4s ease",
                  }}
                >
                  {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                  ))}
                </div>
              ) : (
                <div>No Products found</div>
              )}
            </>
          )}
        </div>
        <div className="button-container">
          <Button onClick={() => navigate("/shop")} title="View All Products" />
        </div>
      </div>
    </div>
  );
};

export default FlashSales;
