const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils')
const { check, validationResult } = require("express-validator");
const db = require('../db/models')

// const { User, Routine, Workout }





// get all routines for a user

router.get('/', asyncHandler(async (req, res, next) => {
    const currentUserId = res.locals.user.id;
    const newRoutine = Routine.build()
    
    const allRoutines = await Routine.findAll({
        attributes: ["title", "id", "tags"],
        where: { userId: currentUserId },
    })
    
    res.json({ allRoutines })
}))

// get specific routine

router.get('/:id', csrfProtection, asyncHandler(async (req, res, next) => {
    const currentUserId = res.locals.user.id;
    const routineId = parseInt(req.params.id, 10);

    const userRoutine = await Routine.findOne({ where: { id: routineId } })
    if( userRoutine.userId !== currentUserId){
        throw error //put in validation error
    }

    const RoutineWorkouts = await Workout.findAll({ 
        attributes: ["id", "weight", "resistance", "repititions", "sets", "distance", "exerciseId"],
        where: { routineId } })
    
    res.json({ RoutineWorkouts })    
}))




router.post('/create', csrfProtection, asyncHandler(async (req, res, next) => {
    const currentUserId = res.locals.user.id;
    const { } = req.body.data //wrong variable
    const newRoutine = await db.Routine.build({
        title,
        tags,
        expires: Date.now() + (1000*60*60*24*7),
        time,
        userId: currentUserId
    })
    
    if ( !newRoutine ) throw error // input error validations
    
    await newRoutine.save();
    
    res.status(203)
    
}))

// get routine by tag
router.get(
    "/(\\d+day)",
	csrfProtection,
	asyncHandler(async (req, res) => {
        const currentUserId = res.local.user.id;
		const tag = req.params
		console.log(req.params);
		const targetRoutine = await db.Routine.findAll({
            where: { tag, userId: currentUserId },
		});
        
		if (!targetRoutine) throw error; // add in error validation

		res.json({ targetRoutine });
	})
);

router.put('/:id(\\d+)', csrfProtection, asyncHandler( async (req, res, next) => {
    const currentUserId = res.locals.user.id;
    const routineId = parseInt(req.params.id)
}))

router.delete('/:id')

module.exports = router