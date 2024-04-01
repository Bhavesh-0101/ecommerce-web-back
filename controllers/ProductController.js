const Product = require("../models/Product");

const getAllProduct = async (req, res) => {
    try {
        const allProduct = await Product.find({})
        res.send(allProduct);
    } catch (err) {
        console.log("Error while get the product", err)
    }

}

module.exports = {
    getAllProduct
}