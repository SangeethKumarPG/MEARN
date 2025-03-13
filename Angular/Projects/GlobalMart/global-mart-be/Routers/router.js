const express = require('express');
const productController = require('../Controllers/productController');
const userController = require('../Controllers/userController');
const jwtMiddleWare = require('../Middlewares/jwtMiddleware');
const router = new express.Router();

router.get('/all-products', productController.getAllProducts);
router.get('/get-product/:id', productController.getProductById);
router.post('/add-to-wishlist', jwtMiddleWare,productController.addToWishList);
router.get('/all-wishlist-items', jwtMiddleWare, productController.getAllWishListItems);
router.delete('/remove-from-wishlist/:id', jwtMiddleWare, productController.removeItemFromWishList)

router.post('/add-product-to-cart', jwtMiddleWare, productController.addItemsToCart);
router.get('/all-cart-items', jwtMiddleWare, productController.getAllCartItems);
router.get('/increment-cart-quantity/:id', jwtMiddleWare, productController.incrementCartItemQuantity);
router.get('/decrement-cart-quantity/:id', jwtMiddleWare, productController.decrementCartItemQuantity);
router.delete('/empty-cart', jwtMiddleWare, productController.emptyCart);
router.delete('/remove-cart-item/:id', jwtMiddleWare, productController.deleteCartItem);

module.exports = router;
