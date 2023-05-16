const mongoose = require("mongoose");


const AuthorsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required, and must be at least 2 characters long."],
        minlength: [3, "name must be at least 2 characters long"]
    }

}, {timestamps : true})

module.exports = mongoose.model('Authors', AuthorsSchema)