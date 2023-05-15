const mongoose = require("mongoose");


const ProductsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title is required"],
        minlength: [2, "title must be at least 2 characters long"]
    },
    price: {
        type: Number,
        required: [true, "price is required"],
        minlength: [1, "price must be at least 1 characters long"]
    },
    description: {
        type: String,
        required: [true, "description is required"],
        minlength: [2, "description must be at least 2 characters long"]
    }

}, {timestamps : true})

module.exports = mongoose.model('Products', ProductsSchema)