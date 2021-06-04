const express = require("express");
const { requireAuth } = require("../auth");
const router = express.Router();
// const { requireAuth } = require("../auth")
router.get("/gym", requireAuth, (req, res) => {
	res.render("app");
});

router.post("/users/logout", (req, res) => {});
module.exports = router;
