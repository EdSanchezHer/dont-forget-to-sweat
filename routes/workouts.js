const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils')
const { check, validationResult } = require('express-validator');
const db = require('../db/models');
const workout = require('../db/models/workout');


router.get('/workout/:id(\\d+)', csrfProtection, asyncHandler(async (req, res) => {
    const currentUserId = res.locals.user.id;
    const workoutId = parseInt(req.params.id, 10);
    
    const userWorkout = await db.Workout.findOne({ where: { workoutId } });

    if( userWorkout.userId !== currentUserId){
        throw error // put in validation error
    }

    res.json({ userWorkout });

}));



// router.get('/',  )






router.post('/', csrfProtection, asyncHandler(async (req, res) => {
    const currentUserId = res.locals.user.id;
    const { exerciseId, weight, resistance, repetitions, sets, distance } = req.body

    const workout = db.Workout.build({
        exerciseId,
        weight,
        resistance,
        repetitions,
        sets,
        distance,
        userId: currentUserId
    })
    await workout.save()
    res.status(203)

}))


router.put('/workout/:id', csrfProtection, asyncHandler(async (req, res) => {
    const currentUserId = res.locals.user.id;
    const { repetitions, sets, laps, weight, distance }  = req.body

    const workoutId = parseInt(req.params.id, 10);
    
    const userWorkout = await db.Workout.findOne({ where: { workoutId } });

    if( userWorkout.userId !== currentUserId){
        throw error // put in validation error
    }
    userWorkout
            repetitions
            sets
            laps
            weight
            distance


    res.json({ userWorkout });
    
}));

router.delete('/workout/:id', asyncHandler(async (req, res) => {
    const currentUserId = res.locals.user.id;
    const workoutId = parseInt(req.params.id, 10);
    
    const userWorkout = await db.Workout.findOne({ where: { workoutId } });

    if( userWorkout.userId !== currentUserId){
        throw error // put in validation error
    }

    await userWorkout.destroy();

    res.status(204);
    
}));