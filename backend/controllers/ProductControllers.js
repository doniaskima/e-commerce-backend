const Product = require("../models/ProductModel")


//  Create PRoduct
exports.createProduct = async(req, res, next) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product

    })
}


// get all products 
exports.getAllProducts = async(req, res) => {
    const products = await Product.find();
    res.status(200).json({
        success: true,
        products
    })
}

// Update Product
exports.updateProduct = async(req, res) => {
    let product = await Product.findById(req.params.id);
    if (!product) {
        return res.status(500).json({
            success: false,
            message: "Product is not found with this id"
        })
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    res.status(200).json({
        success: true,
        product
    })
}

// delete Product

exports.deleteProduct = async(req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {

        return res.status(500).json({
            success: false,
            message: "Product is not found with this id",
        });
    }
    await product.remove();
    res.status(200).json({
        success: true,
        message: "Product delete succesfully"
    })
}

exports.getSingleProduct = async(req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        return res.status(500).json({
            success: false,
            message: "Product is not found with this id",
        });
    }
    await product.remove();
    res.status(200).json({
        success: true,
        product
    });
}