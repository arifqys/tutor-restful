import express from 'express';
import { getProducts, saveProduct, updateProduct, deleteProduct } from '../controllers/productController.js';

const router = express.Router();

router.get('/', getProducts);

router.post('/', saveProduct);

router.patch('/:id', updateProduct);

router.delete('/:id', deleteProduct);

export default router;