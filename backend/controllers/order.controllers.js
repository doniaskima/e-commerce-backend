const orderModels = require("../models/OrderModels");

const createOrder = async(req, res) => {
    const newOrder = new orderModels({
        city: req.body.city,
        country: req.body.country,
        phoneNo: req.body.phoneNo,
        quantity: req.body.quantity,
        size: req.body.size,
        productId: req.body.productId,
        Stock: req.body.Stock,
    });
    try {
        const savedOrder = await newOrder.save();
        return res.status(200).json(savedOrder);
    } catch (err) {
        return res.status(500).json(err);
    }
};

const getOrders = async(req, res) => {
    try {
        const orders = await orderModels.find();
        return res.status(200).json(orders);
    } catch (err) {
        return res.status(500).json(err);
    }
};
const getOrder = async(req, res) => {
    const id = req.params.orderId;

    try {
        const order = await orderModels.findById(id);
        return res.status(200).json(order);
    } catch (err) {
        return res.status(500).json(err);
    }
};
const deleteOrder = async(req, res) => {
    const id = req.params.orderId;
    try {
        const order = await orderModels.findByIdAndDelete(id);
        return res.status(200).json(order);
    } catch (err) {
        return res.status(500).json(err);
    }
};
const updateOrder = async(req, res) => {
    const id = req.params.orderId;
    try {
        const order = await orderModels.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        return res.status(200).json(order);
    } catch (err) {
        return res.status(500).json(err);
    }
};

module.exports.createOrder = createOrder;
module.exports.getOrders = getOrders;
module.exports.getOrder = getOrder;
module.exports.deleteOrder = deleteOrder;
module.exports.updateOrder = updateOrder;