const csrf = require('csurf');
const csrfProtection = csrf({cookie: true})

const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch((e) => next(e))

module.exports = {
                  csrfProtection,
                  asyncHandler   
                  }