var express = require("express");
var router = express.Router();
const bcrypt = require("bcryptjs");
const { csrfProtection, asyncHandler } = require("./utils");
// const { render } = require("pug");
// const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const { User } = require("./../db/models");
const { loginUser, logoutUser } = require("../auth");
const { db } = require("./../db/models");

//TITLE: START OF VALIDATORS

const userValidator = [
  check("fullName")
    .exists({ checkFalsey: true })
    .withMessage("Enter full name please")
    .isLength({ max: 75 })
    .withMessage("Full name can not be more than 75 characters long"),
  check("email")
    .exists({ checkFalsey: true })
    .withMessage("Enter an email please")
    .isLength({ max: 75 })
    .withMessage("Email can not be more than 75 characters long")
    .isEmail()
    .withMessage("Email address is not a valid email")
    .custom((value) => {
      return User.findOne({ where: { email: value } }).then((user) => {
        if (user) {
          return Promise.reject(
            "The Email given is already used by another account"
          );
        }
      });
    }),
  check("password")
    .exists({ checkFalsey: true })
    .withMessage("Please enter a password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long")
    .isLength({ max: 20 })
    .withMessage("Password can not exceed 20 characters")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, "g")
    .withMessage(
      'Password must contain one lowercase letter, one uppercase letter, number, and a special character ("!@#$%^&*")'
    ),
];

const loginValidator = [
  check("email")
    .exists({ checkFalsey: true })
    .withMessage("Please enter your email"),
  check("password")
    .exists({ checkFalsey: true })
    .withMessage("Please enter your password"),
];

//TITLE: END of Validators
router.get("/signup", csrfProtection, (req, res, next) => {
  const user = User.build();

  res.render("signup", {
    title: "Sign Up",
    user,
    csrfToken: req.csrfToken(),
  });
});

router.post(
  "/signup",
  csrfProtection,
  userValidator,
  asyncHandler(async (req, res, next) => {
    const { fullName, email, password } = req.body;
    const user = User.build({
      fullName,
      email,
      password,
    });

    const validatorError = validationResult(req);

    if (validatorError.isEmpty()) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.hashedPassword = hashedPassword;
      // user.hashedPassword = getHash(user.password, 8);
      await user.save();
      loginUser(req, res, user);
      res.redirect("/users/login");
    } else {
      const errors = validatorError.array().map((error) => error.msg);
      res.render("signup", {
        title: "Sign up",
        user,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  })
);

router.get("/login", csrfProtection, (req, res, next) => {
  res.render("login", {
    title: "Login",
    csrfToken: req.csrfToken(),
  });
});
router.post("/login", csrfProtection, loginValidator, asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    const errors = [];
    const validatorError = validationResult(req);

    if (validatorError.isEmpty()) {
      const user = await User.findOne({ where: { email } });

      if (user !== null) {
        const passwordMatch = await bcrypt.compare(
          password,
          user.hashedPassword.toString()
        );

        if (passwordMatch) {
          loginUser(req, res, user);

          // const workout = db.Workout.build()

          return res.redirect("/gym");
        }
      }
      errors.push("Login failed for the provided email address and password");
    } else {
      errors = validatorError.array().map((error) => error.msg);
    }
    res.render("login", {
      title: "Login",
      errors,
      csrfToken: req.csrfToken(),
    });
  })
);
router.post("/logout", (req, res) => {
  logoutUser(req, res);
  res.redirect("/");
});

module.exports = router;
