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

// get specific list

// router.get('/add', csrfProtection, asyncHandler(async (req, res, next) => {
//     const currentUserId = res.locals.user.id;
//     const newRoutine = Routine.build()




// }))

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


router.post('/routines', csrfProtection, asyncHandler(async (req, res, next) => {
    const currentUserId = res.locals.user.id;

    

}))

router.put('/routine/:id')

router.delete('/routine/:id')