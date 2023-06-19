import {
  ProductCategories,
  ProductCategoriesContainer,
} from "../utils/product-interface";
import close from "../assets/icons/Delete.svg";
import { useEffect, useRef } from "react";

interface FilterProps {
  toggleModal: (shouldOpen: boolean) => void;
  onFilterSelect: (filter: string, isSelected: HTMLInputElement) => void;
  onApplyFilters: () => void;
  onClearFilters: () => void;
  productCategories: ProductCategoriesContainer[];
}

const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  toggleModal: (shouldOpen: boolean) => void
): void => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        toggleModal(false);
      }
      event.preventDefault();
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, toggleModal]);
};

const Filter: React.FC<FilterProps> = ({
  toggleModal,
  onApplyFilters,
  onFilterSelect,
  onClearFilters,
  productCategories,
}) => {
  const modelRef = useRef<HTMLDivElement>(null);
  useOutsideClick(modelRef, toggleModal);

  const passFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filter = event.target.id;
    const currentSelect = event.target;
    onFilterSelect(filter, currentSelect);
  };

  const handleApplyClick = () => {
    onApplyFilters();
  };

  const renderProductList = (objects: ProductCategoriesContainer[]) => {
    const filteredObjects = objects.filter((item) => item.title !== "Explore");
    return (
      <>
        {filteredObjects.map((item: any, title = item.title
          .substring(8)
          .replace(" ", "")
          .toLowerCase()) => (
          <fieldset className="filter" key={`${title}_filter`}>
            <div className="filter-type" key={`${title}_container`}>
              <h5 key={`${title}_heading`}>{item.title.substring(8)}</h5>
            </div>
            <div className={`${title} filter-list`} key={`${title}_items`}>
              {item.list.map((listItem: ProductCategories) => (
                <label
                  htmlFor={listItem.id}
                  className="filter-items secondary-text"
                  key={`${listItem.id}_filter`}
                >
                  <input
                    type="checkbox"
                    name={listItem.name}
                    id={listItem.id}
                    key={`${listItem.value}_checkbox`}
                    className="secondary-text"
                    checked={item.checked}
                    onChange={passFilter}
                  />
                  {listItem.value}
                </label>
              ))}
            </div>
          </fieldset>
        ))}
      </>
    );
  };

  return (
    <div className="filter-container" ref={modelRef}>
      <div className="heading">
        <img
          className="icon"
          src={close}
          alt="close button"
          onClick={() => toggleModal(false)}
        />
        <p>Filter</p>
        <h3>Filter By</h3>
      </div>
      <form className="filter-form">
        {renderProductList(productCategories)}
        <div className="filter-buttons">
          <button
            type="reset"
            className="secondary button"
            onClick={onClearFilters}
          >
            Clear All
          </button>
          <button
            type="button"
            className="primary button"
            onClick={handleApplyClick}
          >
            Apply
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filter;
