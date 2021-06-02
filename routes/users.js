var express = require('express');
var router = express.Router();


const { csrfProtection, asyncHandler} = require("./utils")

const db = require("../db/models");
const { render } = require('pug');

const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const user = require('../db/models/user');


const loginUser = (req, res, next) => {
  req.session.auth = {
    userId: user.id
  }
}
const logoutUser = (req, res) => {
  delete req.session.auth;
};
//TITLE: START OF VALIDATORS

const userValidator = [
  check("fullName")
  .exists({ checkFalsey: true})
  .withMessage("Enter full name please")
  .isLength({max: 75})
  .withMessage("Full name can not be more than 75 characters long"),
  
  check("email")
  .exists({checkFalsey: true})
  .withMessage("Enter an email please")
  .isLength({max: 75})
  .withMessage("Email can not be more than 75 characters long")
  .isEmail()
  .withMessage("Email address is not a valid email")
  .custom((value) => {
    return db.User.findOne({where: {email: value}}).then((user) => {
      if(user) {
        return Promise.reject(
          "The Email given is already used by another account"
          )
        }
      })
    }),
    check("password")
    .exist({ checkFalsey: true })
    .withMessage("Please enter a password")
    .isLength({ min: 8})
    .withMessage("Password must be at least 8 characters long")
    .isLength({ max : 20 })
    .withMessage("Password can not exceed 20 characters")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, "g")
    .withMessage('Password must contain one lowercase letter, one uppercase letter, number, and a special character ("!@#$%^&*")')
  ];
  
  const loginValidator = [
    check("email")
    .exists({ checkFalsey: true})
    .withMessage("Please enter your email"),
    check("password")
    .exists({ checkFalsey: true})
    .withMessage("Please enter your password")
  ];
  
  //TITLE: END of Validators
  
  //* START of routes
  /* GET users listing. */
  router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });
  
  router.get("/signup", csrfProtection, (req, res, next) => {
  const user =  db.User.build();

  render.render("signup", {
    title: "Sign Up",
    user,
    csrfToken: req.csrfToken();
  })
})

router.post(
  "/signup",
  csrfProtection,
  userValidator,
  asyncHandler(async(req, res) => {
    const {fullName, email, password, bodyWeight, bodyFatPercentage, fitnessLevel} = req.body;

    const user = db.User.build({
      fullName,
      email,
      password,
      bodyWeight,
      bodyFatPercentage,
      fitnessLevel,
    })

    const validatorError = validationResult(req);

    if(validatorError.isEmpty()) {
      user.hashedPassword = await bcrypt.hash(password, 11);
      await user.save();
      loginUser(req, res, user);
      res.redirect("/app")
    } else {
      const errors = validatorError.array().map((error) => error.msg);
      res.render("signup", {
        title: "Sign up",
        user,
        error,
        csrfToken: req.csrfToken(),
      })
    }
  })

)

module.exports = router;
