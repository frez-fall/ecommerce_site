import "../styles/productmenu.css";
import arrow from "../assets/icons/Arrow.svg";
import dropDownImg from "../assets/images/Desktop/Dropdown image.png";
import {
  ProductCategories,
  ProductCategoriesContainer,
} from "../utils/product-interface";

import { productCategories } from "../utils/product-categories";

function ProductMenu() {
  const renderProductList = (objects: ProductCategoriesContainer) => {
    let heading =
      objects.title !== null ? (
        <h6 key={objects.title}>{objects.title}</h6>
      ) : (
        ""
      );
    return (
      <div
        className="list-container"
        key={`${objects.title ? objects.title.substring(8) : ""}_menu`}
      >
        {heading}
        <ul
          className="menu-list"
          key={`${objects.title ? objects.title.substring(8) : ""}_list`}
        >
          {objects.list.map((item: ProductCategories) => (
            <li className="menu-item" value={item.value} key={item.value}>
              <a className="secondary-text" key={`${item.value}_link`}>
                {item.value}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  return (
    <div className="container-fluid dropdown">
      <hr />
      <div className="row">
        <div className="col-lg-7 menu">
          {productCategories.map((item) => renderProductList(item))}
        </div>
        <div className="col-lg-5">
          <div className="dropdown-section">
            <img
              className="dropdown-image"
              src={dropDownImg}
              alt="girl putting on skincare"
            />
            <div className="desc-container">
              <div className="description">
                <h5>Don't know where to start?</h5>
                <div>
                  <p className="secondary-text">
                    Take our skin test to find a product suitable for you
                  </p>
                </div>
              </div>
              <img src={arrow} className="text-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductMenu;
