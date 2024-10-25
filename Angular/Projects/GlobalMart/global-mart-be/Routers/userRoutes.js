const express = require('express');
const router = new express.Router();

const userController = require('../Controllers/userController');

router.post('/user-register', userController.registerController)
router.post('/user-login', userController.loginController)

module.exports = router;