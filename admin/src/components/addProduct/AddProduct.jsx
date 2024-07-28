import { useState } from "react";
import "./addProduct.css";

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    old_price: "",
    new_price: "",
    category: "women",
  });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");

  const imageHandler = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
  };

  const Add_Product = async (e) => {
    console.log(productDetails);
    e.preventDefault();
    let responseData;
    let product = productDetails;
    let formData = new FormData();
    formData.append("product", image);
    try {
      await fetch("http://localhost:4000/upload", {
        method: "POST",
        headers: {
          accept: "application/json",
        },
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => (responseData = data));

      if (responseData.success) {
        product.image = responseData.image_url;
        console.log("Product added successfully!", product);
      }
    } catch (error) {
      setServerError("An error occurred: " + error.message);
    }
  };

  return (
    <form className="add-product">
      <div className={`add-product-itemfield ${errors.name ? 'error' : ''}`}>
        <p>Product title</p>
        <input
          type="text"
          name="name"
          placeholder="Type here"
          value={productDetails.name}
          onChange={inputHandler}
        />
        {errors.name && <p className="error-text">{errors.name}</p>}
      </div>
      <div className="add-product-price">
        <div className={`add-product-itemfield ${errors.old_price ? 'error' : ''}`}>
          <p>Price</p>
          <input
            type="number"
            name="old_price"
            placeholder="Type here"
            onChange={inputHandler}
            value={productDetails.old_price}
          />
          {errors.old_price && <p className="error-text">{errors.old_price}</p>}
        </div>
        <div className={`add-product-itemfield ${errors.new_price ? 'error' : ''}`}>
          <p>Offer price</p>
          <input
            type="number"
            name="new_price"
            placeholder="Type here"
            onChange={inputHandler}
            value={productDetails.new_price}
          />
          {errors.new_price && <p className="error-text">{errors.new_price}</p>}
        </div>
      </div>
      <div className={`add-product-itemfield ${errors.category ? 'error' : ''}`}>
        <p>Product Category</p>
        <select
          name="category"
          className="add-product-selector"
          value={productDetails.category}
          onChange={inputHandler}
        >
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kids">Kids</option>
        </select>
        {errors.category && <p className="error-text">{errors.category}</p>}
      </div>
      <div className={`add-product-itemfield ${errors.image ? 'error' : ''}`}>
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : "/upload_area.svg"}
            alt="Upload area"
            className="add-product-thumbnail-img"
          />
        </label>
        <input type="file" name="image" id="file-input" hidden onChange={imageHandler} />
        {errors.image && <p className="error-text">{errors.image}</p>}
      </div>
      {serverError && <p className="error-text server-error">{serverError}</p>}
      <button onClick={Add_Product} className="add-product-btn" type="submit">
        ADD
      </button>
    </form>
  );
};

export default AddProduct;
