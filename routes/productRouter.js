import express from "express";
import { createproduct, deleteProduct, getProducts, updateProduct } from "../controller/productController.js";

const router = express.Router()

router.route('/').post(createproduct).get(getProducts)
router.route('/:id').put(updateProduct).delete(deleteProduct)

export default router