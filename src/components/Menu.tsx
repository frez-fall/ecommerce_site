import {
  Navigation,
  NavigationWithMethod,
  navigationItems,
} from "../utils/navigation-list";

import arrow from "../assets/icons/Arrow.svg";

const Menu = () => {
  const renderNavList = (objects: Navigation[] | NavigationWithMethod[]) => {
    let menuObjects =
      window.innerWidth < 992
        ? objects
        : objects.filter((object) => object.value !== "User");
    return (
      <ul className="nav-list">
        {menuObjects.map((item: any) => (
          <li
            className="nav-item"
            key={item.id}
            onMouseEnter={item.onMouseEnter || null}
          >
            {item.value === "Products" ? (
              <img
                src={arrow}
                className="text-icon mb-hide"
                alt="Products Icon"
              />
            ) : null}
            <div className="icon-container">
              <img
                src={item.icon}
                className="nav-icon"
                alt={`${item.value} Button`}
              />
            </div>
            <a className="nav-link secondary-text mb-hide" href="#">
              {item.value}
            </a>
          </li>
        ))}
      </ul>
    );
  };
  return <div className="nav-menu">{renderNavList(navigationItems)}</div>;
};

export default Menu;
