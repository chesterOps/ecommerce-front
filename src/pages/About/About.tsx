import "./About.css";
import { BsShop } from "react-icons/bs";
import { CiDollar } from "react-icons/ci";
import { GiShoppingBag } from "react-icons/gi";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { RiLinkedinLine } from "react-icons/ri";
import Features from "../../components/Sections/NewArrival/Features";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="container about-main">
        <div className="about-row">
          <div className="Leftcontent ">
            <h2>Our Story</h2>
            <p>
              Launched in 2015, Exclusive is South Asia’s premier online
              shopping marketplace with an active presence in Bangladesh.
              Supported by a wide range of tailored marketing, data, and service
              solutions, Exclusive has 10,500 sellers and 300 brands and serves
              3 millions customers across the region.
            </p>
            <p className="secondtext">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <div className="rightPicture ">
            <img src="/about-image.jpg" alt="two women shopping " />
          </div>
        </div>
      </section>

      <section className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-2">
            <div className="statistics-border">
              <div className="radius1">
                <div className="radius2">
                  <span>
                    <BsShop size={28} />
                  </span>
                </div>
              </div>
              <h3>10.5K</h3>
              <p>Sellers active on our site</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-2">
            <div className="statistics-border">
              <div className="radius1">
                <div className="radius2">
                  <span>
                    <CiDollar size={40} />
                  </span>
                </div>
              </div>
              <h3>33k</h3>
              <p>Monthly product sale</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-2">
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
          </div>

          <div className="col-lg-4 col-sm-2">
            <div className="statistics-border">
              <div className="radius1">
                <div className="radius2">
                  <span>
                    <CiDollar size={40} />
                  </span>
                </div>
              </div>
              <h3>25k</h3>
              <p>Anual gross sale in our site</p>
            </div>
          </div>
        </div>
      </section>
      <div className="container actors">
        <div className="row">
          <div className="col-md-3">
            <div className="actor">
              <div className="picture">
                <img src="/tom-cruise.jpg"></img>
              </div>
              <div className="actor-holder">
                <h3>Tom cruise</h3>
                <p>Founder & Chairman</p>
                <span>
                  <Link to="www.twitter.com">
                    <CiTwitter />
                  </Link>
                </span>
                <span>
                  <Link to="www.instagram.com">
                    <CiInstagram />
                  </Link>
                </span>
                <span>
                  <Link to="www.linkedin.com">
                    <RiLinkedinLine />
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="actor">
              <div className="picture">
                <img src="/emma-watson.jpg"></img>
              </div>
              <div className="actor-holder">
                <h3>Emma Watson</h3>
                <p>Managing Director</p>
                <span>
                  <Link to="www.twitter.com">
                    <CiTwitter />
                  </Link>
                </span>
                <span>
                  <Link to="www.instagram.com">
                    <CiInstagram />
                  </Link>
                </span>
                <span>
                  <Link to="www.linkedin.com">
                    <RiLinkedinLine />
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="actor">
              <div className="picture">
                <img src="/will-smith.jpg"></img>
              </div>
              <div className="actor-holder">
                <h3>Will Smith</h3>
                <p>Product Designer</p>
                <span>
                  <Link to="www.twitter.com">
                    <CiTwitter />
                  </Link>
                </span>
                <span>
                  <Link to="www.instagram.com">
                    <CiInstagram />
                  </Link>
                </span>
                <span>
                  <Link to="www.linkedin.com">
                    <RiLinkedinLine />
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="services">
          <Features
            title="FREE AND FAST DELIVERY"
            description="Free delivery for all orders over $140"
            Imgsrc="/services.svg"
          />
          <Features
            title="24/7 CUSTOMER SERVICE"
            description="Friendly 24/7 customer support"
            Imgsrc="/customer-service.svg"
          />
          <Features
            title="MONEY BACK GUARANTEE"
            description="We return money within 30 days"
            Imgsrc="/money-back.svg"
          />
        </div>
      </div>
    </>
  );
};
export default About;
