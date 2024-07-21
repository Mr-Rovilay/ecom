
import PropTypes from "prop-types";
import "./item.css";
import { Link } from "react-router-dom";

const Item = ({ id, image, name, new_prices, old_prices }) => {
  return (
    <div className="item">
      <Link to={`/product/${id}`}>
      
      <img src={image} alt={name} />
      </Link>
      <p>{name}</p>
      <div className="item-prices">
        <div className="item-price-new">${new_prices}</div>
        <div className="item-price-old">${old_prices}</div>
      </div>
    </div>
  );
};

Item.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  new_prices: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  old_prices: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

export default Item;
