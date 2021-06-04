const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils')
const { check, validationResult } = require("express-validator");
const db = require('../db/models')
/* GET home page. */
router.get("/", asyncHandler(async (req, res, next) => {
	res.render("index", { title: "Don't Forget To Sweat" });
}));

module.exports = router;
