const opinion = require("../models/opinion.models.js");
const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors")
    //  Create opinion
exports.createOpinion = catchAsyncErrors(async(req, res, next) => {
    const opinion = await opinion.create(req.body);
    res.status(201).json({
        success: true,
        opinion,
    });
});

// get all opinions
exports.getAllOpinions = catchAsyncErrors(async(req, res) => {
    const opinions = await opinion.find();
    res.status(200).json({
        success: true,
        opinions,
    });
});

// Update opinion
exports.updateOpinion = catchAsyncErrors(async(req, res, next) => {
    let opinion = await opinion.findById(req.params.id);
    if (!opinion) {
        return next(
            new ErrorHandler("opinion is not found with this id", 404)
        );
    }
    opinion = await opinion.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.status(200).json({
        success: true,
        opinion,
    });
});

// delete opinion

exports.deleteOpinion = catchAsyncErrors(async(req, res, next) => {
    const opinion = await opinion.findById(req.params.id);
    if (!opinion) {
        return next(new ErrorHandler("opinion is not found with this id", 404));
    }
    await opinion.remove();
    res.status(200).json({
        success: true,
        message: "opinion delete succesfully",
    });
});

exports.getSingleOpinion = catchAsyncErrors(async(req, res, next) => {
    const opinion = await opinion.findById(req.params.id);
    if (!opinion) {
        return next(new ErrorHandler("opinion is not found with this id", 404));
    }

    res.status(200).json({
        success: true,
        opinion,
    });
});