const {
    getOwnedCart,
    addItemToCart,
    removeItemFromCart,
    emptyCart,
} = require("../controllers/CartController");
const verifyToken = require("../middlewares/verifyToken");

const router = require("express").Router();

router.get("/cart/me", verifyToken, getOwnedCart);
router.put("/cart/empty", verifyToken, emptyCart);

router.put("/cart/add", verifyToken, addItemToCart);
router.put("/cart/remove", verifyToken, removeItemFromCart);

module.exports = router;