import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { TbTruck } from "react-icons/tb";
import { BiRotateLeft } from "react-icons/bi";
//import { FaEye, FaStar, FaRegStar } from "react-icons/fa";
import "./ProductDetails.css";
//import { CiHeart } from "react-icons/ci";
//import { IoEyeOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductListLoader from "../../components/Loaders/ProductList/ProductLoader";
import ProductDetailsLoader from "../../components/Loaders/ProductDetailsLoader/ProductDetailsLoader";
//import { useDispatch } from "react-redux";
//import { addItem } from "../../features/cart/cartSlice";

interface IProduct {
  _id: string;
  title: string;
  price: number;
  discount: number;
  images: { url: string }[];
  stock: number;
  description: string;
  rating?: { value: number; length: number };
  colors?: { name: string; hex: string }[];
  sizes?: string[];
}

const ProductDetails: React.FC = () => {
  const params = useParams<{ slug: string }>();
  const [loading, setLoading] = useState(true);
  const [pending, setPending] = useState(true);
  const [product, setProduct] = useState<IProduct | undefined>(undefined);
  const [relatedProducts, setRelatedProduct] = useState([]);
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [selectedColor, setSelectedColor] = useState<string>("blue");
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [quantity, setQuantity] = useState<number>(1);
  //const dispatch = useDispatch();
  //const navigate = useNavigate();

  const handleQuantityChange = (change: number): void => {
    if (quantity + change > (product?.stock ?? 10)) return;
    setQuantity(Math.max(1, quantity + change));
  };

  useEffect(() => {
    const getProductDetails = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://apiexclusive.onrender.com/api/v1/products/${params.slug}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();

        if (data.status === "success") {
          setProduct(data.data);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    const getRelatedProducts = async () => {
      setPending(true);
      try {
        const response = await fetch(
          `https://apiexclusive.onrender.com/api/v1/products/related/${params.slug}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();

        if (data.status === "success") {
          setRelatedProduct(data.data);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setPending(false);
      }
    };

    getProductDetails();
    getRelatedProducts();
  }, [params.slug]);

  // const handleBuyNow = () => {
  //   if (!product) return;

  //   // Add to cart
  //   dispatch(
  //     addItem({
  //       id: product._id,
  //       quantity,
  //       price: product.price,
  //       image: product.images[0].url,
  //       title: product.title,
  //     })
  //   );
  // };

  return (
    <div className="product-page">
      {loading ? (
        <div className="container">
          <ProductDetailsLoader />
        </div>
      ) : (
        <>
          {product ? (
            <div className="product-container">
              {/* Image Gallery */}
              <div className="image-gallery">
                <div className="thumbnail-list">
                  {product.images.map((image, index) => (
                    <div
                      key={index}
                      className={`thumbnail ${
                        selectedImage === index ? "active" : ""
                      }`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <img src={image.url} alt={`Product view ${index + 1}`} />
                    </div>
                  ))}
                </div>
                <div className="main-image">
                  <img
                    src={product.images[selectedImage].url}
                    alt={product.title}
                  />
                </div>
              </div>

              {/* Product Details */}
              <div className="product-details">
                <h1 className="product-title">{product.title}</h1>
                <div className="rating">
                  <div className="stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="star filled">
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="review-count">
                    {product.rating
                      ? `(${product.rating.length} Reviews)`
                      : "(0 Reviews)"}
                  </span>
                  <span>| </span>
                  <span className={product.stock > 0 ? "stock-status" : ""}>
                    {product.stock > 0 ? "In Stock" : "Out of stock"}
                  </span>
                </div>
                <div className="price">${product.price}</div>
                <p className="description">{product.description}</p>
                {(product.colors || product.sizes) && (
                  <div className="p-options">
                    {product.colors && (
                      <div className="color-section">
                        <label>Colours:</label>
                        <div className="color-options">
                          {product.colors.map((color) => (
                            <button
                              key={color.name}
                              className={`color-option ${
                                selectedColor === color.name ? "active" : ""
                              }`}
                              style={{ backgroundColor: color.hex }}
                              onClick={() => setSelectedColor(color.name)}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                    {product.sizes && (
                      <div className="size-section">
                        <label>Size:</label>
                        <div className="size-options">
                          {product.sizes.map((size) => (
                            <button
                              key={size}
                              className={`size-option ${
                                selectedSize === size ? "active" : ""
                              }`}
                              onClick={() => setSelectedSize(size)}
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <div className="purchase-section">
                  <div className="quantity-selector">
                    <button onClick={() => handleQuantityChange(-1)}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => handleQuantityChange(1)}>+</button>
                  </div>
                  <button className="buy-now-btn">Buy Now</button>
                  <button className="wishlist-btn">
                    <AiOutlineHeart size={20} />
                  </button>
                </div>
                <div className="delivery-info">
                  <div className="delivery-item">
                    <div className="delivery-icon">
                      <TbTruck size={24} />
                    </div>
                    <div className="delivery-text">
                      <div className="delivery-title">Free Delivery</div>
                      <div className="delivery-subtitle">
                        Enter your postal code for Delivery Availability
                      </div>
                    </div>
                  </div>

                  <div className="delivery-item">
                    <div className="delivery-icon">
                      <BiRotateLeft size={24} />
                    </div>
                    <div className="delivery-text">
                      <div className="delivery-title">Return Delivery</div>
                      <div className="delivery-subtitle">
                        Free 30 Days Delivery Returns. Details
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="container">No product found</div>
          )}
        </>
      )}

      <div className="related-container container">
        <div className="block-cn">
          <div className="block-it"></div>
          <h3 className="related-title">Related Item</h3>
        </div>
        <>
          {pending ? (
            <ProductListLoader />
          ) : (
            <div className="row">
              {relatedProducts.length > 0 ? (
                <>
                  {relatedProducts.map((item, index) => (
                    <div className="col-lg-4 col-sm-2" key={index}>
                      <ProductCard product={item} />
                    </div>
                  ))}
                </>
              ) : (
                <div className="col-12">No products found</div>
              )}
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default ProductDetails;
