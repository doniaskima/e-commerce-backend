const express = require('express');

const {
    createProduct,
    getAllProducts,
    updateProduct,
    deleteProduct,
    getSingleProduct,
} = require("../controllers/product.controllers");
const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/product/new").post(createProduct);
router.route("/product/:id").put(updateProduct);
router.route("/product/:id").delete(deleteProduct);
router.route("/product/:id").get(getSingleProduct);

module.exports = router;