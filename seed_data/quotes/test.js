const { builtinModules } = require('node:module')
const sdOne = require('./Quotes1')
const sdTwo = require('./Quotes2')

// console.log(sdOne, sdTwo)

const totalQuotesSeedData = sdOne.concat(sdTwo)

module.exports = totalQuotesSeedData
