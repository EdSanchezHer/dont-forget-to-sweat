const express = require("express");
const { requireAuth } = require("../auth");
const router = express.Router();
// const { requireAuth } = require("../auth")
const { asyncHandler, csrfProtection } = require('./utils')


router.get("/gym", requireAuth, (req, res) => {
    res.render("gym");
})






router.get("/exercises", asyncHandler( async (req, res) => {
    const { muscleGroup } = req.body;

    const exerciseList = await db.Exercise.findAll({ where: { muscleGroup }});

    if ( !exerciseList ) throw error // put in error validation

    res.json({ exerciseList })
}))



router.post("/users/logout", (req, res) => {
    
})
module.exports = router