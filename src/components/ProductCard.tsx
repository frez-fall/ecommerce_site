import "../styles/productcard.css";
import { ProductInfo, Images } from "../utils/product-interface";

interface ProductCardProps {
  product: ProductInfo;
  images: Images;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, images }) => {
  return (
    <div className="product-card">
      <div className="card-img">
        <img src={images[product.imageUrl]} alt={`${product.name} image`} />
      </div>
      <div className="card-details">
        <div>
          <p className="card-name secondary-text">{product.name}</p>
          <p className="secondary-text">{product.size}ML</p>
        </div>
        <div className="card-price">
          <p className="secondary-text">P {product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
