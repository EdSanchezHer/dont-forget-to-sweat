const express = require("express");
const { requireAuth } = require("../auth");
const router = express.Router();
// const { requireAuth } = require("../auth")
const { asyncHandler, csrfProtection } = require("./utils");
const db = require("../db/models");

router.get("/", csrfProtection, (req, res) => {
	return res.render("gym", {title: "It's sweatin' time!"});
});
// get routine by day

// router.get(
// 	"/exercises:,
// 	asyncHandler(async (req, res) => {
// 		// const { muscleGroup } = req.body;

// 		const exerciseList = await db.Exercise.findAll({
// 			// where: { muscleGroup },
// 		});

// 		if (!exerciseList) throw error; // put in error validation

// 		res.json({ exerciseList });
// 	})
// );

router.post("/users/logout", (req, res) => {});
module.exports = router;
