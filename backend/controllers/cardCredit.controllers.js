const cardCreditModels = require("../models/cardCreditModels");

const createCardCredit = async(req, res) => {
    const newCardCredit
 = new cardCredit
Models({
       cardCreditName: req.body.cardCredittName,
       cardCreditNumber: req.bodycardCreditPrice,
       cardCreditSecurityCode: req.bodycardCreditImage,
    });
    try {
        const savedCardCredit
     = await newCardCredit
    .save();
        return res.status(200).json(savedCardCredit
        );
    } catch (err) {
        return res.status(500).json(err);
    }
};

const getCardCredits = async(req, res) => {
    try {
        const cardCredits = await cardCredit
    Models.find();
        return res.status(200).json(cardCredits);
    } catch (err) {
        return res.status(500).json(err);
    }
};
const getCardCredit = async(req, res) => {
    const id = req.params.cardCredit
Id;

    try {
        const cardCredit
     = await cardCredit
    Models.findById(id);
        return res.status(200).json(cardCredit
        );
    } catch (err) {
        return res.status(500).json(err);
    }
};
const deletecardCredit = async(req, res) => {
    const id = req.params.cardCredit
Id;
    try {
        const cardCredit
     = await cardCredit
    Models.findByIdAndDelete(id);
        return res.status(200).json(cardCredit
        );
    } catch (err) {
        return res.status(500).json(err);
    }
};
const updatecardCredit = async(req, res) => {
    const id = req.params.cardCredit
Id;
    try {
        const cardCredit
     = await cardCredit
    Models.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        return res.status(200).json(cardCredit
        );
    } catch (err) {
        return res.status(500).json(err);
    }
};

module.exports.createcardCredit = createcardCredit;
module.exports.getcardCredits = getcardCredits;
module.exports.getcardCredit = getcardCredit;
module.exports.deletecardCredit = deletecardCredit;
module.exports.updatecardCredit = updatecardCredit;