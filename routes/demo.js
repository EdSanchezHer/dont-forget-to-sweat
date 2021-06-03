const express = require('express');
const db = require('../db/models');
const router = express.Router();
const {asyncHandler} = require("./utils");

const loginUser = (req, res, next) => {
    req.session.auth = {
      userId: db.User.id
    }
  }


router.get(
    "/demo",
    asyncHandler(async(req, res, next) => {
        const freeDemo = await db.User.findOne({where: {email : "freeDemo@email.com"}});
        loginUser(req, res, freeDemo);
        res.redirect("/app")
    })
)