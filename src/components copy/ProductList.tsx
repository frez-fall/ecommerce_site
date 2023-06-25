import { useState, useEffect } from "react";
import Filter from "./Filter";
import "../scss/_product-list.scss";
import ProductCard from "./ProductCard";
import { productCategories } from "../utils/product-categories";
import { products, images } from "../utils/product-data.json";

function ProductList() {
  const [isModalOpen, setIsModeOpen] = useState(false);
  const toggleModal = (shouldOpen: boolean) => {
    setIsModeOpen(shouldOpen);
  };

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
    setClearFilters(true);
  };

  useEffect(() => {
    setClearFilters(false);
  }, [clearFilters == true]);

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
        <aside className={`col-lg-3${isModalOpen ? " active" : ""}`}>
          <Filter
            toggleModal={toggleModal}
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
              onClick={() => toggleModal(true)}
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
}

export default ProductList;
