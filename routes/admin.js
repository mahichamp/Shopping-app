const path = require('path');
const express = require('express');
const adminController = require('../controllers/admin');
const router = express.Router();

router.get('/addProduct', adminController.getAddProduct);
router.get('/products', adminController.getProducts);

router.post('/addProduct', adminController.postAddProduct);
router.get('/editProduct/:productId', adminController.getEditProduct);
router.post('/editProduct', adminController.postEditProduct);
router.post('/deleteProduct',adminController.postDeleteProduct);

module.exports = router;