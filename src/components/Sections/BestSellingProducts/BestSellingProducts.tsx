import CategoryCard from "../../CategoryCard/CategoryCard"
import ProductCard from "../../ProductCard/ProductCard"

import "./BestSellingProducts.css"
const BestSellingProducts = () => {
  return (
    <div className="best-selling-products">
        <CategoryCard
                    title="This Month"
                    heading="Best Selling Products"
                    showButton
                  />
        <div className="card-grid">
            <ProductCard
                        title="The north coat"
                        price="$256.99"
                        image="/src/assets/sweater.png"
                        numberOfRatings={65}
                        rating={5}
                    
                      />
                                 <ProductCard
                        title="Gucci duffle bag"
                        price="$960"                     
                        image="/src/assets/gucci-bag.png"
                        numberOfRatings={65}
                        rating={4}
                    
                      />
                                 <ProductCard
                        title="RGB liquid CPU Cooler"
                        price="$160"
                        image="/src/assets/RGBspeaker.png"
                        numberOfRatings={160}
                        rating={4}
                    
                      />
                                 <ProductCard
                        title="Small BookSelf"
                        price="$360"
                        image="/src/assets/bookshelf.png"
                        numberOfRatings={65}
                        rating={4}
                    
                      />
        </div>
    </div>
  )
}

export default BestSellingProducts