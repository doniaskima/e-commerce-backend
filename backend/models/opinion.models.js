const mongoose = require("mongoose");

const opinionSchema = new mongoose.Schema({
    opinion : {type: String},
});

module.exports = mongoose.model("Opinion",opinionSchema);