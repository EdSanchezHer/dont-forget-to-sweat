const express = require('express')
const router = express.Router()
const { asyncHandler, csrfProtection } = require('./utils')
const db = require('../db/models')
const { requireAuth } = require('../auth')

// router.get('["/Cardio", "/Legs", "/Arms", "/Core", "/Back", "/Chest"]', asyncHandler(async (req, res) => {
router.get('/:muscleGroup', requireAuth, asyncHandler(async (req, res) => {
		const muscleGroup = req.params.muscleGroup
		// console.log("params:  ", muscleGroup)
		const exerciseList = await db.Exercise.findAll({ where: { muscleGroup } });

		if (!exerciseList) throw error; // put in error validation

		res.json({ exerciseList });
	})
);

module.exports = router