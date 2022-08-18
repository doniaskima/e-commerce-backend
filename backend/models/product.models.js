const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a name of a product"],
        trim: true,
        maxLength: [20, "Product name not exceed than 20 characters"],
    },
    description: {
        type: String,
        required: [true, "please add a description of your product"],
        maxlength: [4000, "Description is can not exceed than 4000 characters"],
    },
    price: {
        type: Number,
        required: [true, "please add a price for your product"],
    },
    color: {
        type: String,
    },
    size: {
        type: String,
    },
    ratings: {
        type: Number,
        default: 0,
        maxlength: 5,
    },
    image: [{
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    }, ],
    category: {
        type: String,
        required: [true, "Please add a category of your product"],
    },
    Stock: {
        type: Number,
        required: [true, "Please add some stoke for your product"],
        maxLength: [3, "Stock can not exceed than 3 characters"],
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",

    },
    createAt: {
        type: Date,
        default: Date.now(),
    },
    questions:[{type: mongoose.Schema.ObjectId ,ref:"Question",
    }],
    opinions: [{type: mongoose.Schema.ObjectId, ref:"Opinion",
    }],
    
});
module.exports = mongoose.model("Product", productSchema);