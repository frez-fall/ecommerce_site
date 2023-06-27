import "../scss/_navbar.scss";
import ProductMenu from "./ProductMenu";
import Menu from "./Menu";

interface NavbarProps {
  openModal: (modalName: string) => void;
  closeModal: (modalName: string) => void;
  handleOutsideClick: (
    ref: React.RefObject<HTMLDivElement>,
    closeModal: (modalName: string) => void,
    modalName: string
  ) => void;
  modalState: { [key: string]: boolean };
}

const Navbar: React.FC<NavbarProps> = ({
  openModal,
  closeModal,
  handleOutsideClick,
  modalState,
}) => {
  return (
    <header>
      <div
        className="nav-container"
        onMouseLeave={() => closeModal("productModal")}
      >
        <nav className="navbar">
          <div className="container-fluid">
            <div className="nav-section mb-hide" id="navbarSupportedContent">
              <Menu
                openModal={openModal}
                closeModal={closeModal}
                modalState={modalState}
              />
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
        {window.innerWidth >= 992 && (
          <ProductMenu
            closeModal={closeModal}
            handleOutsideClick={handleOutsideClick}
            modalState={modalState}
          />
        )}
      </div>
    </header>
  );
};

export default Navbar;
