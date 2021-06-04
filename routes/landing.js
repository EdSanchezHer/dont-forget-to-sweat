const express = require("express");
const router = express.Router();
// const { requireAuth } = require("../auth")
router.get("/gym", (req, res) => {
    res.render("gym");
})
module.exports = router