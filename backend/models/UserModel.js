const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: { type: String, maxlength: 128 },

    email: {
        type: String,
        required: true,
        unique: true,
        index: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, "Please enter your password!"],
        minlength: [8, "Password should be greater than 8 characters"],
        select: false,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    creditcard: {
        cardNumber: {Number, unique: true}
    }
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);