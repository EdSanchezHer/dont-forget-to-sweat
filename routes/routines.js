const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils')
const { check, validationResult } = require("express-validator");
const db = require('../db/models')

const { User, Routine, Workout }





// get all routines for a user

router.get('/', asyncHandler(async (req, res, next) => {
    const currentUserId = res.locals.user.id;
    
    const allRoutines = await Routine.findAll({
        attributes: ["title", "id", "tags"],
        where: { userId: currentUserId }
    })
    
    res.json({ allRoutines })
}))

// get specific list

router.get('/:id(\\d+)', csrfProtection, asyncHandler(async (req, res, next) => {
    const currentUserId = res.locals.user.id;
    const routineId = parseInt(req.params.id, 10);

    const userRoutine = await Routine.findOne({ where: { id: routineId } })

    const allWorkouts = await Workout.findAll({ 
        attributes: [
            
        ]




    })


})


router.post('/routines')

router.put('/routine/:id')

router.delete('/routine/:id')