import { useEffect, useState } from "react";
import "./listProduct.css";

const ListProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:4000/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const removeProduct = (id) => {
    // Implement product removal functionality
    // Example:
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="list-product">
      <h2>Product List</h2>
      <div className="list-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      {products.length > 0 ? (
        <div className="list-product-allproducts">
          <hr />
          {products.map((product, i) => (
            <div key={i} className="list-format-main list-product-format">
              <img src={product.image} alt={product.name} className="list-product-thumbnail" />
              <h3>{product.name}</h3>
              <p>Price: ${product.old_price}</p>
              <p>Offer Price: ${product.new_price}</p>
              <p>Category: {product.category}</p>
              <button onClick={() => removeProduct(product.id)} className="list-product-remove-btn">
                <img src="/cross_icon.png" alt="Remove" className="list-product-remove-icon" />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default ListProduct;
