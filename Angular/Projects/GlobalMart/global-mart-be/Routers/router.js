const express = require('express');
const productController = require('../Controllers/productController');
const userController = require('../Controllers/userController');
const router = new express.Router();

router.get('/all-products', productController.getAllProducts);
router.get('/get-product/:id', productController.getProductById);

module.exports = router;
