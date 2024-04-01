const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    category: {
        type: String
    },
    price: {
        type: Number,
    },
    amount: {
        type: Number
    }
})

const Product = mongoose.model('products', productSchema)

module.exports = Product;