
import PropTypes from "prop-types";
import "./item.css";

const Item = ({ image, name, new_prices, old_prices }) => {
  return (
    <div className="item">
      <img src={image} alt={name} />
      <p>{name}</p>
      <div className="item-prices">
        <div className="item-price-new">${new_prices}</div>
        <div className="item-price-old">${old_prices}</div>
      </div>
    </div>
  );
};

Item.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  new_prices: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  old_prices: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

export default Item;
