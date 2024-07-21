import PropTypes from "prop-types";
import "./productdisplay.css";
import star_icon from "/star_icon.png";
import star_dull_icon from "/star_dull_icon.png";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = ({ product }) => {
  const {addToCart } = useContext(ShopContext);
  return (
    <div className="productDisplay">
      <div className="productDisplay-left">
        <div className="productDisplay-img-list">
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
        </div>
        <div className="productDisplay-img">
          <img
            className="productDisplay-main-img"
            src={product.image}
            alt={product.name}
          />
        </div>
      </div>
      <div className="productDisplay-right">
        <h1>{product.name}</h1>
        <div className="productDisplay-right-star">
          <img src={star_icon} alt="Star Icon" />
          <img src={star_icon} alt="Star Icon" />
          <img src={star_icon} alt="Star Icon" />
          <img src={star_icon} alt="Star Icon" />
          <img src={star_dull_icon} alt="Star Dull Icon" />
          <p>(122)</p>
        </div>
        <div className="productDisplay-right-prices">
          <div className="productDisplay-right-price-old">${product.old_price}</div>
          <div className="productDisplay-right-price-new">${product.new_price}</div>
        </div>
        <div className="productDisplay-right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          voluptatem, illo beatae vero maiores facilis voluptatum doloribus illum
          dicta voluptas similique nisi repudiandae assumenda maxime sit
          consequatur. Commodi, neque nobis.
        </div>
        <div className="productDisplay-right-size">
          <h1>Select size</h1>
          <div className="productDisplay-right-size-options">
            <div className="size-option">S</div>
            <div className="size-option">M</div>
            <div className="size-option">L</div>
            <div className="size-option">XL</div>
            <div className="size-option">XXL</div>
          </div>
        </div>
        <button className="add-to-cart-button" onClick={()=> addToCart(product.id)}>ADD TO CART</button>
        <p className="productDisplay-right-category">
          <span>Category:</span> Women, T-shirt, Crop Top
        </p>
        <p className="productDisplay-right-category">
          <span>Tags:</span> Modern Latest
        </p>
      </div>
    </div>
  );
};

ProductDisplay.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    old_price: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    new_price: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    description: PropTypes.string,
    category: PropTypes.string,
    tags: PropTypes.string,
  }).isRequired,
};

export default ProductDisplay;
