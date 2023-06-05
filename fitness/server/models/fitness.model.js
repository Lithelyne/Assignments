const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required, and must be at least 2 characters long."],
        minlength: [2, "First name must be at least 2 characters long"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required, and must be at least 2 characters long."],
        minlength: [2, "Last name must be at least 2 characters long"]
    },
    email: {
        type: String,
        required: [true, "Email is required, and must be at least 2 characters long."],
        minlength: [2, "Email must be at least 2 characters long"]
    },
    age: {
        type: Number,
        required: [true, "Age is required"]
    },
    weight:{ 
        type: Number,
        required: [true, "Weight is required"]
    },
    height:{ 
        type: Number,
        required: [true, "Height is required"]
    },
    gender:{ 
        type: String,
        required: [true, "Gender is required"] 
    },

}, {timestamps : true})

module.exports = mongoose.model('Users', UsersSchema)