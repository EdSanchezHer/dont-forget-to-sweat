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

// (async () => {
//   const hashedPassword = await getHash('P@ssw0rd', 10);
//   const passwordIsMatch = await isPassword('P@ssw0rd', hashedPassword);
// })();

module.exports = {
    csrfProtection,
    asyncHandler, 
    getHash,
    isPassword
}


// function PrintThis(){
    // const hashed = getHash('password', 10)
    // console.log(hashed)
    // const hashed2 = getHash('dD3f4U17$', 10)
    // console.log(hashed2)
// }