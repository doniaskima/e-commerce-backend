const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    city: {
        type: String,
    },

    country: {
        type: String,
    },

    phoneNo: {
        type: Number,
    },
    orderItems: [{
        quantity: {
            type: Number,
            required: true,
        },
        productId: {
            type: mongoose.Schema.ObjectId,
            ref: "Product",
            required: true,
        },
    }, ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
    paidAt: {
        type: Date,
        required: true,
    },
    deliveredAt: Date,
});
module.exports = mongoose.model("Order", OrderSchema);