import Product from "../models/productModel.js";

export const addProduct = async (req, res) => {
  const { name, description, image, category, new_price, old_price } = req.body;

  try {
    // Fetch all products and determine the next ID
    let products = await Product.find({}).sort({ id: 1 }); // Sorting by `id` in ascending order
    let id;
    if (products.length > 0) {
      let last_product = products[products.length - 1]; // Get the last product in the array
      id = last_product.id + 1; // Increment the ID
    } else {
      id = 1; // Start with ID 1 if there are no products
    }

    // Create a new product
    const product = new Product({
      id,
      name,
      description,
      image,
      category,
      new_price,
      old_price,
    });

    // Save the product
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
  
    try {
      const product = await Product.findOneAndDelete({ id: id });
  
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
  
      res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  export const removeProduct = async (req, res) => {
await Product.findOneAndDelete({ id: req.body.id });
res.json({ message: "Product deleted successfully", name: req.body.name });
  }

  export const getAllProducts = async (req, res) => {
    try {
      const products = await Product.find({});
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };