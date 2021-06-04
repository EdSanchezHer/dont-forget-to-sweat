const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils')
const { check, validationResult } = require("express-validator");
const db = require('../db/models')

const { User, Routine, Workout }





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

router.get('/:id(\\d+)', csrfProtection, asyncHandler(async (req, res, next) => {
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

// get routine by tag




router.post('/routines/create', csrfProtection, asyncHandler(async (req, res, next) => {
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
    
    

}))

router.put('/routine/:id')

router.delete('/routine/:id')