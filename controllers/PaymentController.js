const Payment = require("../models/payment");

const createPayment = async (req, res) => {
    try {
        const CreatedPayment = await Payment.create(req.body);
        console.log(CreatedPayment);
        res.send(CreatedPayment);
    } catch (err) {
        console.log("Error while create the Payment", err)
    }
}

const getAllPayment = async (req, res) => {
    try {
        const allPayment = await Payment.find({})
        .populate('products_id');
        console.log(allPayment);
        res.send(allPayment);
    } catch (err) {
        console.log("Error while get the Payment", err)
    }
}

module.exports = {
    createPayment,
    getAllPayment
}