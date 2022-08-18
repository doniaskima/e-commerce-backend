const {
	createQuestion,
	getQuestion,
	getQuestions,
	updateQuestion,
	deleteQuestion,
} = require("../controllers/question.controllers");
const QuestionModel = require("../models/question.models");
const router = require("express").Router();

router.param("question", async (req, res, next, id) => {
	try {
		const question = await questionModel.findById(id);

		if (!question) {
			return res.status(404).json("question not found");
		}

		req.question = question;
		next();
	} catch (err) {
		return res.status(500).json(err);
	}
});

router.post("/", createQuestion);
router.get("/", getQuestions);
router.get("/:question", getQuestion);
router.put("/:question", updateQuestion);
router.delete("/:question", deleteQuestion);

module.exports = router;
