const {
	createOpinion,
	getOpinion,
	getOpinions,
	updateOpinion,
	deleteOpinion,
} = require("../controllers/opinion.controllers.js");
const OpinionModel = require("../models/Opinion.models");
const router = require("express").Router();

router.param("opinion", async (req, res, next, id) => {
	try {
		const opinion = await opinionModel.findById(id);

		if (!opinion) {
			return res.status(404).json("opinion not found");
		}

		req.opinion = opinion;
		next();
	} catch (err) {
		return res.status(500).json(err);
	}
});

router.post("/", createOpinion);
router.get("/", getOpinions);
router.get("/:opinion", getOpinion);
router.put("/:opinion", updateOpinion);
router.delete("/:opinion", deleteOpinion);

module.exports = router;
