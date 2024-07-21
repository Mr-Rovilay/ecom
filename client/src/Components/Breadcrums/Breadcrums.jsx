import PropTypes from "prop-types";
import "./breadcrums.css";
import arrow_icon from "/breadcrum_arrow.png";

const Breadcrumbs = ({ product }) => {
  return (
    <div className="breadcrumbs">
      Home <img src={arrow_icon} alt="Arrow Icon" /> SHOP <img src={arrow_icon} alt="Arrow Icon" /> {product.category} <img src={arrow_icon} alt="Arrow Icon" /> {product.name}
    </div>
  );
};

Breadcrumbs.propTypes = {
  product: PropTypes.shape({
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Breadcrumbs;
