const question = require("../models/question.models.js");
const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors")


    //  Create question
exports.createQuestion = catchAsyncErrors(async(req, res, next) => {
    const question = await question.create(req.body);
    res.status(201).json({
        success: true,
        question,
    });
});

// get all questions
exports.getAllQuestions = catchAsyncErrors(async(req, res) => {
    const questions = await question.find();
    res.status(200).json({
        success: true,
        questions,
    });
});

// Update question
exports.updateQuestion = catchAsyncErrors(async(req, res, next) => {
    let question = await question.findById(req.params.id);
    if (!question) {
        return next(
            new ErrorHandler("question is not found with this id", 404)
        );
    }
    question = await question.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.status(200).json({
        success: true,
        question,
    });
});

// delete question

exports.deleteQuestion = catchAsyncErrors(async(req, res, next) => {
    const question = await question.findById(req.params.id);
    if (!question) {
        return next(new ErrorHandler("question is not found with this id", 404));
    }
    await question.remove();
    res.status(200).json({
        success: true,
        message: "question delete succesfully",
    });
});

exports.getSingleQuestion = catchAsyncErrors(async(req, res, next) => {
    const question = await question.findById(req.params.id);
    if (!question) {
        return next(new ErrorHandler("question is not found with this id", 404));
    }

    res.status(200).json({
        success: true,
        question,
    });
});