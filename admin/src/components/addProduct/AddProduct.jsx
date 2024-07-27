import "./addProduct.css"
const AddProduct = () => {
  return (
    <div className="add-product">
        <div className="addproduct-itemfield">
            <p className="">Product title</p>
            <input type="text" name="name" placeholder="type here"/>
        </div>
        <div className="addproduct-price">
            <div className="addproduct-itemfield">
                <p className="">price</p>
                <input type="text" name="old_price" placeholder="Type here" />
            </div>
            <div className="addproduct-itemfield">
                <p className="">offer price</p>
                <input type="text" name="new_price" placeholder="Type here" />
            </div>
        </div>
        <div className="addproduct-itemfield">
            <p>Product Category</p>
            <select name="category" className="addproduct-selector">
                <option value="women">Women</option>
                <option value="men">Men</option>
                <option value="kids">Kids</option>
            </select>
        </div>
        <div className="addproduct-itemfield">
            <label htmlFor="file input">
                <img src="/upload_area.svg" alt="" />
            </label>
            <input type="file" name="image" id="file-input" hidden/>
        </div>
        <button className="addproduct-btn">ADD</button>
    </div>
  )
}

export default AddProduct