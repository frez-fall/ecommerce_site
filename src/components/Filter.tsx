import {
  ProductCategories,
  ProductCategoriesContainer,
} from "../utils/product-interface";
import close from "../assets/icons/Delete.svg";
import "../scss/_filter.scss";
import { useRef } from "react";

interface FilterProps {
  closeModal: (modalName: string) => void;
  handleOutsideClick: (
    ref: React.RefObject<HTMLDivElement>,
    closeModal: (modalName: string) => void,
    modalName: string
  ) => void;
  onFilterSelect: (filter: string, isSelected: HTMLInputElement) => void;
  onApplyFilters: () => void;
  onClearFilters: () => void;
  productCategories: ProductCategoriesContainer[];
}

const Filter: React.FC<FilterProps> = ({
  closeModal,
  handleOutsideClick,
  onApplyFilters,
  onFilterSelect,
  onClearFilters,
  productCategories,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  handleOutsideClick(modalRef, closeModal, "filterModal");

  const passFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filter = event.target.id;
    const currentSelect = event.target;
    onFilterSelect(filter, currentSelect);
  };

  const handleApplyClick = () => {
    onApplyFilters();
  };

  const renderProductList = (objects: ProductCategoriesContainer[]) => {
    const filteredObjects = objects.filter((item) => item.title);
    return (
      <>
        {filteredObjects.map((item: any, title = item.title
          .substring(8)
          .replace(" ", "")
          .toLowerCase()) => (
          <fieldset className="filter" key={`${title}_filter`}>
            <h5 key={`${title}_heading`}>{item.title.substring(8)}</h5>
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
    <div className="filter-container" ref={modalRef}>
      <div className="heading">
        <img
          className="icon"
          src={close}
          alt="close button"
          onClick={() => closeModal("filterModal")}
        />
        <p>Filter</p>
        <h3>Filter By</h3>
      </div>
      <form className="filter-form">
        {renderProductList(productCategories)}
      </form>
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
    </div>
  );
};

export default Filter;
