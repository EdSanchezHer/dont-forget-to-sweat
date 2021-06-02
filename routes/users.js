var express = require('express');
var router = express.Router();

const { csrfProtection, asyncHandler} = require("./utils")

const db = require("../db/models");
const { render } = require('pug');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/signup", csrfProtection, (req, res, next) => {
  const user =  db.User.build();

  render.render("")
})


module.exports = router;
