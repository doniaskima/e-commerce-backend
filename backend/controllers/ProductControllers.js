const Product = require("../models/ProductModel");
const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors")
    //  Create PRoduct
exports.createProduct = catchAsyncErrors(async(req, res, next) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product,
    });
});

// get all products
exports.getAllProducts = catchAsyncErrors(async(req, res) => {
    const products = await Product.find();
    res.status(200).json({
        success: true,
        products,
    });
});

// Update Product
exports.updateProduct = catchAsyncErrors(async(req, res, next) => {
    let product = await Product.findById(req.params.id);
    if (!product) {
        return next(
            new ErrorHandler("product is not found with this id", 404)
        );
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.status(200).json({
        success: true,
        product,
    });
});

// delete Product

exports.deleteProduct = catchAsyncErrors(async(req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        return next(new ErrorHandler("product is not found with this id", 404));
    }
    await product.remove();
    res.status(200).json({
        success: true,
        message: "Product delete succesfully",
    });
});

exports.getSingleProduct = catchAsyncErrors(async(req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        return next(new ErrorHandler("product is not found with this id", 404));
    }

    res.status(200).json({
        success: true,
        product,
    });
});