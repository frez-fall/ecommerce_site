import brandLogo from "../assets/icons/brandlogo.svg";
import facebook from "../assets/icons/Facebook.svg";
import twitter from "../assets/icons/Twitter.svg";
import instagram from "../assets/icons/Instagram.svg";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="newsletter-container">
          <div className="row newsletter">
            <div className="col-lg-6">
              <h4>Join our Newsletter</h4>
              <p className="secondary-text">
                Get exclusive discounts, sale alerts and be notified to new
                products and restocks
              </p>
            </div>
            <div className="col-lg-6">
              <div className="form-container">
                <form className="newsletter-form">
                  <input
                    type="email"
                    className="newsletter-input secondary-text"
                    placeholder="email@company.com"
                  ></input>
                  <button type="submit" className="primary button">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="foot-links-container">
          <div className="row">
            <div className="col-md-4">
              <img src={brandLogo} className="logo" alt="fleur logo" />
              <p className="secondary-text">
                © 2023 Fleur. All Rights Reserved.
              </p>
              <div className="social-icons">
                <img
                  src={facebook}
                  className="social-icon-item"
                  alt="fb-icon"
                />
                <img
                  src={twitter}
                  className="social-icon-item"
                  alt="twt-icon"
                />
                <img
                  src={instagram}
                  className="social-icon-item"
                  alt="ig-icon"
                />
              </div>
            </div>
            <div className="col-md-8">
              <ul className="foot-links">
                <h6>Shop</h6>
                <li className="footer-item secondary-text">
                  <a href="#">All Products</a>
                </li>
                <li className="footer-item secondary-text">
                  <a href="#">Best Sellers</a>
                </li>
                <li className="footer-item secondary-text">
                  <a href="#">Featured Products</a>
                </li>
              </ul>
              <ul className="foot-links">
                <h6>About Us</h6>
                <li className="footer-item secondary-text">
                  <a href="#">Company</a>
                </li>
                <li className="footer-item secondary-text">
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
              <ul className="foot-links">
                <h6>Customer Service</h6>
                <li className="footer-item secondary-text">
                  <a href="#">Contact Us</a>
                </li>
                <li className="footer-item secondary-text">
                  <a href="#">Shipping & Delivery</a>
                </li>
                <li className="footer-item secondary-text">
                  <a href="#">Return & Refund</a>
                </li>
                <li className="footer-item secondary-text">
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
