const express = require('express');
const productController = require('../Controllers/productController');
const userController = require('../Controllers/userController');
const router = new express.Router();

router.get('/all-products', productController.getAllProducts);

module.exports = router;
