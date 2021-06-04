const express = require("express");
const { requireAuth } = require("../auth");
const router = express.Router();
// const { requireAuth } = require("../auth")
const { asyncHandler, csrfProtection } = require("./utils");
const db = require("../db/models");

router.get("/app", requireAuth, (req, res) => {
	res.render("app");
});
// get routine by day

router.get(
	"/routine/(\\d+day)",
	csrfProtection,
	asyncHandler(async (req, res) => {
		const currentUserId = res.local.user.id;
		const { tag } = req.params;
		console.log(req.params);
		const targetRoutine = await db.Routine.findAll({
			where: { tag, userId: currentUserId },
		});

		if (!targetRoutine) throw error; // add in error validation

		res.json({ targetRoutine });
	})
);

router.get(
	"/exercises",
	asyncHandler(async (req, res) => {
		const { muscleGroup } = req.body;

		const exerciseList = await db.Exercise.findAll({
			where: { muscleGroup },
		});

		if (!exerciseList) throw error; // put in error validation

		res.json({ exerciseList });
	})
);

router.post("/users/logout", (req, res) => {});
module.exports = router;
