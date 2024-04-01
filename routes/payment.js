const express = require('express');
const router = express.Router();
const { createPayment, getAllPayment } = require('../controllers/PaymentController')

router.post('/createPayment', createPayment)
router.get('/getAllPayment', getAllPayment)

module.exports = router;