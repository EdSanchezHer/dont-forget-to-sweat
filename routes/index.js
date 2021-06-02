var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("signup", { title: "a/A Express Skeleton Home" });
});

//test

module.exports = router;
