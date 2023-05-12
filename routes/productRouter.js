import express from "express";
import { createproduct, deleteProduct, updateProduct } from "../controller/productController.js";

const router = express.Router()

router.route('/').post(createproduct)
router.route('/:id').put(updateProduct).delete(deleteProduct)

export default router