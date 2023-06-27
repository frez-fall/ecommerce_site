import "../scss/_product-list.scss";
import Filter from "./Filter";
import ProductCard from "./ProductCard";
import { useState } from "react";
import { productCategories } from "../utils/product-categories";
import { products, images } from "../utils/product-data.json";

interface ProductListProps {
  openModal: (modalName: string) => void;
  closeModal: (modalName: string) => void;
  handleOutsideClick: (
    ref: React.RefObject<HTMLDivElement>,
    closeModal: (modalName: string) => void,
    modalName: string
  ) => void;
  modalState: { [key: string]: boolean };
}

const ProductList: React.FC<ProductListProps> = ({
  openModal,
  closeModal,
  handleOutsideClick,
  modalState,
}) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [appliedFilters, setAppliedFilters] = useState<string[]>([]);
  const [clearFilters, setClearFilters] = useState(false);

  const handleFilterSelect = (filter: string, isSelected: HTMLInputElement) => {
    if (isSelected.checked) {
      setSelectedFilters([...selectedFilters, filter]);
    } else {
      setSelectedFilters(selectedFilters.filter((f) => f !== filter));
    }
  };

  const handleApplyFilters = () => {
    setAppliedFilters(selectedFilters);
  };

  const handleClearFilters = () => {
    setSelectedFilters([]);
    setClearFilters(!clearFilters);
  };

  const filteredProducts = products.filter((product) => {
    if (window.innerWidth < 992) {
      if (appliedFilters.length === 0) {
        return true;
      }

      const filtersSelected = appliedFilters.every((filter) =>
        [product.productType, product.skinType].includes(filter)
      );
      return filtersSelected;
    } else {
      const filtersSelected = selectedFilters.every((filter) =>
        [product.productType, product.skinType].includes(filter)
      );
      return filtersSelected;
    }
  });
  return (
    <div className="product-page-container">
      <div className="row">
        <aside className={`col-lg-3 ${modalState.filterModal ? "active" : ""}`}>
          <Filter
            closeModal={closeModal}
            handleOutsideClick={handleOutsideClick}
            onFilterSelect={handleFilterSelect}
            onApplyFilters={handleApplyFilters}
            onClearFilters={handleClearFilters}
            productCategories={productCategories}
          />
        </aside>
        <main className="col-lg-9">
          <section className="product-section">
            <h2>Products</h2>
            <button
              className="button links filter-btn"
              onClick={() => openModal("filterModal")}
            >
              <img className="text-icon" src="src/assets/icons/Filter.svg" />
              Filter
            </button>
            <div className="card-container">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductCard
                    key={`${product.skinType}_${product.id}`}
                    product={product}
                    images={images}
                  />
                ))
              ) : (
                <p>No products found</p>
              )}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ProductList;
