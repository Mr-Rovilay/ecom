import "./Navbar.css";
import logo from "/logo.png";
import cart_icon from "/cart_icon.png";
import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from "/nav_dropdown.png";

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext);
    const menuRef = useRef(null);
    
    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle("nav-menu-visible");
        e.target.classList.toggle("open");
    };

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="Shopper Logo" />
                <Link to={"/"} className="li">
                <p>SHOPPER</p>
                </Link>
            </div>
            <img className="nav-dropdown" src={nav_dropdown} alt="Menu" onClick={dropdown_toggle} />
            <ul className="nav-menu" ref={menuRef}>
                <li onClick={() => setMenu("shop")}>
                    <Link style={{ textDecoration: "none", color: "#626262" }} to={"/"}>Shop</Link>
                    {menu === "shop" ? <hr /> : null}
                </li>
                <li onClick={() => setMenu("men")}>
                    <Link style={{ textDecoration: "none", color: "#626262" }} to={"/men"}>Men</Link>
                    {menu === "men" ? <hr /> : null}
                </li>
                <li onClick={() => setMenu("women")}>
                    <Link style={{ textDecoration: "none", color: "#626262" }} to={"/women"}>Women</Link>
                    {menu === "women" ? <hr /> : null}
                </li>
                <li onClick={() => setMenu("kids")}>
                    <Link style={{ textDecoration: "none", color: "#626262" }} to={"/kids"}>Kids</Link>
                    {menu === "kids" ? <hr /> : null}
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link to={"/login"}>
                    <button>Login</button>
                </Link>
                <Link to={"/cart"}>
                    <img src={cart_icon} alt="Cart Icon" />
                </Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
};

export default Navbar;
