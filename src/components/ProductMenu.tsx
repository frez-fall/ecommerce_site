import { useState, useRef, useEffect } from "react";
import "../scss/_product-menu.scss";
import arrow from "../assets/icons/Arrow.svg";
import close from "../assets/icons/Delete.svg";
import products from "../assets/icons/Products.svg";
import dropDownImg from "../assets/images/Desktop/Dropdown image.png";
import {
  ProductCategories,
  ProductCategoriesContainer,
} from "../utils/product-interface";

import { productCategories } from "../utils/product-categories";

interface VisibilityState {
  [key: string]: boolean;
}

interface ProductMenuProps {
  closeModal: (modalName: string) => void;
  handleOutsideClick: (
    ref: React.RefObject<HTMLDivElement>,
    closeModal: (modalName: string) => void,
    modalName: string
  ) => void;
  modalState: { [key: string]: boolean };
}

const ProductMenu: React.FC<ProductMenuProps> = ({
  closeModal,
  handleOutsideClick,
  modalState,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  handleOutsideClick(modalRef, closeModal, "productModal");

  const [isVisible, setIsVisible] = useState<VisibilityState>({});
  const toggleVisibility = (event: React.MouseEvent<HTMLDivElement>) => {
    const { id } = event.currentTarget;
    setIsVisible((prevVisibility) => ({
      ...prevVisibility,
      [id]: !prevVisibility[id],
    }));
  };

  const renderProductList = (objects: ProductCategoriesContainer) => {
    let heading = objects.title && (
      <div
        className={`menu-heading`}
        id={objects.id}
        onClick={toggleVisibility}
      >
        <h6 key={objects.title}>{objects.title}</h6>
        <img src={close} className="expand text-icon" />
      </div>
    );
    return (
      <div
        className={`list-container ${isVisible[objects.id] ? "active" : ""}`}
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
    <div
      className={`container-fluid product-menu-container ${
        modalState.productModal ? "active" : ""
      }`}
    >
      <hr />
      <div className="product-menu" ref={modalRef}>
        <div className="heading">
          <img className="icon" src={products} alt="Sparkles" />
          <img
            className="icon"
            src={close}
            alt="close"
            onClick={() => closeModal("productModal")}
          />
        </div>
        <div className="row">
          <div className="col-lg-7 menu ">
            {productCategories.map((item) => renderProductList(item))}
          </div>
          <div className="col-lg-5 skin-quiz">
            <div className="product-menu-section">
              <img
                className="product-menu-image"
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
    </div>
  );
};

export default ProductMenu;
