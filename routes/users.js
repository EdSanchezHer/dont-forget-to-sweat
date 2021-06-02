var express = require('express');
var router = express.Router();


const { csrfProtection, asyncHandler, getHash, isPassword } = require("./utils")

const db = require("../db/models");
const { render } = require('pug');

// const bcrypt = require("bcryptjs");
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
    .exists({ checkFalsey: true })
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
  // router.get('/', function(req, res, next) {
  //   res.send('respond with a resource');
  // });
  
  router.get("/signup", csrfProtection, (req, res, next) => {
  const user = await db.User.build({
    fullName: null,
    email: null,
    hashedPassword: null,
    bodyWeight: null,
    bodyFatPercentage: null,
    fitnessLevel: null
  });

  res.render("signup", {
    title: "Sign Up",
    user,
    csrfToken: req.csrfToken()
  })
})

router.post(
  "/signup",
  csrfProtection,
  userValidator,
  asyncHandler(async(req, res) => {
    const {fullName, email, password} = req.body;

    const user = await db.User.build({
      fullName,
      email,
      password,
      bodyWeight: null,
      bodyFatPercentage: null,
      fitnessLevel: null,
    })

    const validatorError = validationResult(req);

    if(validatorError.isEmpty()) {
      user.hashedPassword = getHash(user.password, 8)
      await user.save();
      loginUser(req, res, user);
      res.redirect("/app")
    } else {
      const errors = validatorError.array().map((error) => error.msg);
      res.render("signup", {
        title: "Sign up",
        user,
        errors,
        csrfToken: req.csrfToken(),
      })
    }
  })
)

router.get("/login", csrfProtection, (req, res, next)=> {
  res.render("login", {
    title: "Login",
    csrfToken: req.csrfToken(),
  })
})
  router.post(
    "/login",
    csrfProtection,
    loginValidator,
    asyncHandler(async(req, res) => {
      const { email, password } = req.body;
      const errors = [];
      const validatorError = validationResult(req)

      if(validatorError.isEmpty()) {
        const user = await db.User.findOne({ where: { email } });
        if(user !== null) {
          const passwordMatch = await isPassword(password, user.hashedPassword.toString());
            if(passwordMatch) {
              loginUser(req, res, user);
              return res.redirect("/app");
            }
        }
          errors.push("Login failed for the provided email address and password")
      } else {
        errors = validatorError.array().map((error) => error.msg);
      }
      res.render("login", {
        title: "Login",
        errors,
        csrfToken: req.csrfToken(),
      })
    })
  )


  
module.exports = router;
