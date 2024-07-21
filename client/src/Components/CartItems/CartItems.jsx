import { useContext } from "react";
import "./cartitems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "/cart_cross_icon.png";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
  return (
    <div className="cartItems">
      <div className="cartItems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id} className="cartItem">
              <div className="cartItem-format cartItems-format-main">
                <img
                  src={e.image}
                  alt={e.name}
                  className="cartIcon-product-icon"
                />
                <p className="cartItem-name">{e.name}</p>
                <p className="cartItem-price">${e.new_price.toFixed(2)}</p>
                <button className="cartItems-quantity">{cartItems[e.id]}</button>
                <p className="cartItem-total">
                  ${(e.new_price * cartItems[e.id]).toFixed(2)}
                </p>
                <img
                  src={remove_icon}
                  onClick={() => removeFromCart(e.id)}
                  alt="Remove"
                  className="cartItem-remove-icon"
                />
              </div>
              <hr />
            </div>
          );
        }
         return null;
      })}
      <div className="cartItems-down">
        <div className="cartItems-total">
            <h1>cart Totals</h1>
            <div className="">
                <div className="cartItems-total-item">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartItems-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartItems-total-item">
                    <h3>Total</h3>
                    <p>${getTotalCartAmount()}</p>
                </div>
            </div>
            <button>proceed to checkout</button>
        </div>
        <div className="cartItems-promoCode">
            <p>if you have a promo code enter it here</p>
            <div className="cartItems-promoBox">
                <input type="text" placeholder="promo code" />
                <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
