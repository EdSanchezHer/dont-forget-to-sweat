const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils')
const { check, validationResult } = require('express-validator');
const db = require('../db/models');
const { requireAuth } = require('./../auth')
// const cors = require("cors")

// router.param( async function('getexercise') {
    
// })




// get specific workout ( typically for editing / delete )

router.get('/:id', csrfProtection, asyncHandler(async (req, res) => {
    const currentUserId = res.locals.user.id;
    const workoutId = parseInt(req.params.id, 10);
    
    const userWorkout = await db.Workout.findOne({ where: { workoutId } });

    if( userWorkout.userId !== currentUserId){
        throw error // put in validation error
    }

    res.status(201).json({ userWorkout });

}));

// get all current workouts

router.get('/', (req, res) => {

} )






router.post('/', requireAuth, csrfProtection, asyncHandler(async (req, res, next) => {
    // console.log(req.body);
    // const exerciseId = parseInt(req.params.id)
    // console.log('exerciseId: ', exerciseId)
    const currentUserId = res.locals.user.id;
    const { weight, resistance, repetitions, sets, distance, exerciseId } = req.body
    console.log('currentUserId: ', currentUserId)
    const workout = await db.Workout.build({
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
    
    const exerciseTitle = await db.Exercise.findByPk(exerciseId).then(obj => {
        return workout['exerciseTitle'] = obj.exerciseTitle
    })

    

    res.status(201).json({ workout })


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

router.delete('/:id', asyncHandler(async (req, res) => {
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