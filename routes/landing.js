const express = require("express");
const { requireAuth } = require("../auth");
const router = express.Router();
const { asyncHandler, csrfProtection } = require("./utils");
const db = require("../db/models");
// const workout = require("../db/models/workout");

router.get("/", requireAuth, csrfProtection, asyncHandler( async (req, res, next) => {
	// const currentUserId = req.user
	console.log("request-user: ", req.user)
	// const tempRoutine = await db.Routine.findOne({ 
	// 	where: { tag: "TEMP" },
	// 	include: {
	// 		model: db.Workout,
	// 		include: db.Workout_Routine
	// 	}
	// })	

	return res.render("gym", {title: "It's sweatin' time!", csrfToken: req.csrfToken()});
}))
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
