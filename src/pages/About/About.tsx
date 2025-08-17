import "./About.css"
import { BsShop } from "react-icons/bs";
import { CiDollar } from "react-icons/ci";
import { GiShoppingBag } from "react-icons/gi";
import { PiCurrencyCircleDollar } from "react-icons/pi";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { RiLinkedinLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { GoShieldCheck } from "react-icons/go";





const About = () => {
  return (
    <>
      <section className="container about-container">
        <div className="Leftcontent">
          <h2>Our Story</h2>
          <p>Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 millions customers across the region.</p>
          <p className="secondtext">Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
        </div>
        <div className="rightPicture">
          <img src="src/assets/womenshopping.png" alt="two women shopping " />
        </div>
      </section>

      <section className="statistics-section">
        
          <div className="statistics-border">
            <div className="radius1">
              <div className="radius2">
                <span>
                  <BsShop />
                </span>
              </div>
            </div>
            <h3>10.5K</h3>
            <p>Sallers active our site</p>
          </div>
  

          <div className="statistics-border">
            <div className="radius1">
              <div className="radius2">
                <span>
                  <CiDollar />
                </span>
              </div>
            </div>
            <h3>33k</h3>
            <p>Monthly Product Sale</p>
          </div>

            <div className="statistics-border">
            <div className="radius1">
              <div className="radius2">
                <span>
                   <GiShoppingBag />
                </span>
              </div>
            </div>
            <h3>45.5k</h3>
            <p>Customer active in our site</p>
          </div>
               
          <div className="statistics-border">
            <div className="radius1">
              <div className="radius2">
                <span>
                  <PiCurrencyCircleDollar />
                </span>
              </div>
            </div>
            <h3>25k</h3>
            <p>Anual gross sale in our site</p>
          </div>

         
        
      </section>
      <section className="actors-section">
        <div className="actor-holder">
          <div className="actors-picture">
            <img src="src/assets/tom-cruise.png"></img> 
          </div>
          <h3>Tom cruise</h3>
          <p>Founder & Chairman</p>
            <span><CiTwitter /></span>
            <span><CiInstagram /></span>
            <span><RiLinkedinLine /></span>  
        </div>

         <div className="actor-holder">
          <div className="actors-picture">
            <img src="src/assets/emma.png"></img> 
          </div>
          <h3>Emma Watson</h3>
          <p>Managing Director</p>
            <span><CiTwitter /></span>
            <span><CiInstagram /></span>
            <span><RiLinkedinLine /></span>  
        </div>

         <div className="actor-holder">
          <div className="actors-picture">
            <img src="src/assets/will-smith.png"></img> 
          </div>
          <h3>Will Smith</h3>
          <p>Product Designer</p>
            <span><CiTwitter /></span>
            <span><CiInstagram /></span>
            <span><RiLinkedinLine /></span>  
        </div>

      </section>
      <section className="statistics-attribute">
         <div className="statistics-border2">
            <div className="radius1">
              <div className="radius2">
                <span>
                   <TbTruckDelivery />
                </span>
              </div>
            </div>
            <h3>FREE AND FAST DELIVERY</h3>
            <p>Free delivery for all orders over $140</p>
          </div>

          <div className="statistics-border2">
            <div className="radius1">
              <div className="radius2">
                <span>
                   <TfiHeadphoneAlt />
                </span>
              </div>
            </div>
            <h3>24/7 CUSTOMER SERVICEY</h3>
            <p>Friendly 24/7 customer support</p>
          </div>

          <div className="statistics-border2">
            <div className="radius1">
              <div className="radius2">
                <span>
                   <GoShieldCheck />
                </span>
              </div>
            </div>
            <h3>MONEY BACK GUARANTEE</h3>
            <p>We return money within 30 days</p>
          </div>
      </section>
    </>
  )

}
export default About