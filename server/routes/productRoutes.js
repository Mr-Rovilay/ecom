import express from "express";
import { addProduct, deleteProduct, getAllProducts, removeProduct } from "../controllers/productController.js";
const router = express.Router();

router.post("/addProduct", addProduct);
router.post("/delete/:id", deleteProduct);
router.post("/removeProduct", removeProduct);
router.get("/products", getAllProducts); 

export default router;