const express = require('express');
const router = express.Router();
const product = require('./product')
const payment = require('./payment')


router.use('/product', product)
router.use('/payment', payment)

module.exports = router;