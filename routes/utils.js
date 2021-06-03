const bcrypt = require('bcryptjs');
const csrf = require('csurf');

const csrfProtection = csrf({cookie : true})

const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch((e) => next(e))


function getHash(password, saltRounds) {
  const hash = bcrypt.hashSync(password, saltRounds);
  console.log(hash);
  return hash;
}

async function isPassword(password, hash) {
  const isPassword = await bcrypt.compare(password, hash);
  console.log(isPassword);
  return isPassword;
};



module.exports = {
    csrfProtection,
    asyncHandler, 
    getHash,
    isPassword
}

