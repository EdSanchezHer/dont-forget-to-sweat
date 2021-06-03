const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils')
const { check, validationResult } = require('express-validator');
const db = require('../db/models')


router.get('/workouts', )

router.post('/workouts')

router.put('/workout/:id')

router.delete('/workout/:id')
