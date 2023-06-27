import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import Menu from "./components/Menu";
import ProductMenu from "./components/ProductMenu";
function App() {
  const [modals, setModals] = useState<{ [key: string]: boolean }>({
    productModal: false,
    filterModal: false,
    checkoutModal: false,
  });

  useEffect(() => {
    const isAnyModalOpen = Object.values(modals).some((isOpen) => isOpen);
    if (isAnyModalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [modals]);

  const openModal = (modalName: string) => {
    setModals((prevModals) => ({ ...prevModals, [modalName]: true }));
  };

  const closeModal = (modalName: string) => {
    setModals((prevModals) => ({ ...prevModals, [modalName]: false }));
  };

  const useOutsideClick = (
    ref: React.RefObject<HTMLDivElement>,
    closeModal: (modalName: string) => void,
    modalName: string
  ): void => {
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          closeModal(modalName);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
  };

  return (
    <>
      <Navbar
        openModal={openModal}
        closeModal={closeModal}
        handleOutsideClick={useOutsideClick}
        modalState={modals}
      />
      {window.innerWidth < 992 ? (
        <ProductMenu
          closeModal={closeModal}
          handleOutsideClick={useOutsideClick}
          modalState={modals}
        />
      ) : null}
      <ProductList
        openModal={openModal}
        closeModal={closeModal}
        handleOutsideClick={useOutsideClick}
        modalState={modals}
      />
      <Footer />
      {window.innerWidth < 992 ? (
        <Menu
          openModal={openModal}
          closeModal={closeModal}
          modalState={modals}
        />
      ) : null}
    </>
  );
}

export default App;
