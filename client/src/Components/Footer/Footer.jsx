import "./Footer.css";
import footer_logo from "/logo_big.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="Footer Logo" />
      </div>
      <div className="footer-links">
        <a href="/about">About Us</a>
        <a href="/company">Company</a>
        <a href="/product">Products</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
      <div className="footer-copy">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </div>
  );
};
