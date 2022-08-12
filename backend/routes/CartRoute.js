const {
    getOwnedCart,
    addItemToCart,
    removeItemFromCart,
    emptyCart,
} = require("../controllers/CartController");
const verifyToken = require("../middlewares/verifyToken");

const router = require("express").Router();

router.get("/me", verifyToken, getOwnedCart);
router.put("/empty", verifyToken, emptyCart);

router.put("/add", verifyToken, addItemToCart);
router.put("/remove", verifyToken, removeItemFromCart);

module.exports = router;