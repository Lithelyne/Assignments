const mongoose = require("mongoose");

//id setup punchline created at update at v
const JokesSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "setup is required"],
    },
    punchline: {
        type: String,
        required: [true, "setup is required"],
    }

}, {timestamps : true})

module.exports = mongoose.model('Jokes', JokesSchema)