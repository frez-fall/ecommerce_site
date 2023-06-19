import "../styles/navigation.css";
import arrow from "../assets/icons/Arrow.svg";
import ProductMenu from "./ProductMenu";
import Menu from "./Menu";
import {
  Navigation,
  NavigationWithMethod,
  navigationItems,
} from "../utils/navigation-list";

function Navbar() {
  let closeDropDown = function () {
    let productDropDown: Element | null = document.querySelector(".dropdown");
    productDropDown !== null ? productDropDown.classList.remove("active") : "";
  };

  // const renderNavList = (objects: Navigation[] | NavigationWithMethod[]) => {
  //   let filteredObjects = objects.filter((object) => object.value !== "User");
  //   return (
  //     <ul className="nav-list">
  //       {filteredObjects.map((item: any) => (
  //         <li
  //           className="nav-item"
  //           key={item.id}
  //           onMouseEnter={item.onMouseEnter || null}
  //         >
  //           {item.value === "Products" ? (
  //             <img src={arrow} className="text-icon" alt="Products Icon" />
  //           ) : null}
  //           <a className="navlink secondary-text" href="#">
  //             {item.value}
  //           </a>
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // };

  return (
    <header>
      <div className="nav-container" onMouseLeave={closeDropDown}>
        <nav className="navbar">
          <div className="container-fluid">
            <div className="nav-section mb-hide" id="navbarSupportedContent">
              <Menu />
            </div>
            <a href="#" className="navbar-logo">
              <img
                src="src/assets/icons/brandlogo.svg"
                className="logo"
                alt="fleur logo"
              />
            </a>
            <div className="nav-section icons">
              <a href="#" className="mb-hide">
                <img
                  src="src/assets/icons/User.svg"
                  className="user-btn icon"
                  alt="user icon"
                />
              </a>
              <a href="#">
                <img
                  src="src/assets/icons/ShoppingCart.svg"
                  className="cart-btn icon"
                  alt="shopping cart icon"
                />
              </a>
            </div>
          </div>
        </nav>
        <ProductMenu />
      </div>
    </header>
  );
}

export default Navbar;