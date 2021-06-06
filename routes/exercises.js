const express = require('express')
const router = express.Router()
const { asyncHandler, csrfProtection } = require('./utils')
const db = require('../db/models')


router.get('/:id(\\d+)', csrfProtection, asyncHandler(async (req, res) => {
		// const currentUserId = res.locals.user.id;
		const muscleGroup = req.params.muscleGroup 
		const exerciseList = await db.Exercise.findAll({
			where: { muscleGroup },
		});

		if (!exerciseList) throw error; // put in error validation

		res.json({ exerciseList });
	})
);

module.exports = router