import  { useContext } from "react";
import PropTypes from "prop-types";
import "./Css/category.css";
import { ShopContext } from "../Context/ShopContext";
import drop_down from "/public/dropdown_icon.png";
import Item from "../Components/Item/Item";

const ShopCategory = ({ banner, category }) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img src={banner} alt="Category Banner" className="shopCategory-banner" />
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopCategory-sort">
          Sort by <img src={drop_down} alt="Dropdown Icon" />
        </div>
      </div>
      <div className="shopCategory-products">
        {all_product.map((item, index) => {
          if (category === item.category) {
            return (
              <Item
                key={index}
                id={item.id}
                image={item.image}
                name={item.name}
                new_prices={item.new_price}
                old_prices={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopCategory-loadmore">Explore More</div>
    </div>
  );
};

ShopCategory.propTypes = {
  banner: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default ShopCategory;
