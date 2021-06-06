const express = require('express')
const router = express.Router()
const { asyncHandler, csrfProtection } = require('./utils')
const db = require('../db/models')
const Quote = require('../public/javascripts/quoteModule')

router.get("/", asyncHandler(async (req, res, next) => {
    const NewQuote = new Quote();
    const quoteId = NewQuote.getRandomQuoteId()
    const newQ = await db.Quote.findByPk(quoteId)

    const formatedQuote = await newQ.formatLongQuote()
    console.log(formatedQuote
        )
    res.json({ formatedQuote })

}))

module.exports = router