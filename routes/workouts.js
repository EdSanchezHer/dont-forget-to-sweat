const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils')
const { check, validationResult } = require('express-validator');
const db = require('../db/models');
const workout = require('../db/models/workout');

// get specific workout ( typically for editing / delete )

router.get('/:id', csrfProtection, asyncHandler(async (req, res) => {
    const currentUserId = res.locals.user.id;
    const workoutId = parseInt(req.params.id, 10);
    
    const userWorkout = await db.Workout.findOne({ where: { workoutId } });

    if( userWorkout.userId !== currentUserId){
        throw error // put in validation error
    }

    res.json({ userWorkout });

}));

// get all current workouts

router.get('/', (req, res) => {

} )






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
    // insert validations and error checking

    await workout.save()
    res.json({ workout })

}))


router.put('/:id', csrfProtection, asyncHandler(async (req, res) => {
    const currentUserId = res.locals.user.id;
    const { exerciseId, repetitions, sets, resistance, weight, distance }  = req.body

    const workoutId = parseInt(req.params.id, 10);
    
    const userWorkout = await db.Workout.findOne({ where: { workoutId } });
    if(!userWorkout){
        await userWorkout.build({
            repetitions,
            sets,
            resistance,
            weight,
            distance,
            exerciseId,
            userId: currentUserId
        })
    } else {
        if(userWorkout.userId !== currentUserId){
            throw error // put in validation error
        } else {     
            userWorkout.update(repetitions, sets, resistance, weight, distance, exerciseId)
        }
    }
    res.status(203);
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
    
}))

module.exports = router