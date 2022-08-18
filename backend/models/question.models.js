const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    question:{type: String},
    response:{type: String},
    vote: {type: Number},
})

module.exports = mongoose.model("Question",questionSchema);