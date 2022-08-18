const mongoose = require("mongoose");
 
const creditCardSchema = new mongoose.Schema({
    cardNumber : {
        Number,
        unique: true,
        required: true,
    } ,
    cardName: {
        String,
        required: true,
    },
    securityCode: {
        Number,
        required: true,
        unique: true,
        maxlength: 4,
    }
})
module.exports = mongoose.model("CreditCard",creditCardSchema);