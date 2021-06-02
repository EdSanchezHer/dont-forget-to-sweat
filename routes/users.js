var express = require('express');
var router = express.Router();

const { csrfProtection, asyncHandler} = require("./utils")

const db = require("../db/models");
const { render } = require('pug');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



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

)

module.exports = router;
