const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    userId: { type: String},
    paymentAmount: { type: Number },
    products_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'products' }]
})

const Payment = mongoose.model('Payments', paymentSchema)

module.exports = Payment;