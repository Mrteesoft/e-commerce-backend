const express = require('express');
const { getProducts, getProductById, createProduct } = require('../controllers/basicProductController');

const router = express.Router();

// GET /products - Get all products or filter by category
router.get('/products', getProducts);

// GET /products/:id - Get single product by ID
router.get('/products/:id', getProductById);

// POST /products - Create new product (bonus endpoint)
router.post('/products', createProduct);

module.exports = router;
