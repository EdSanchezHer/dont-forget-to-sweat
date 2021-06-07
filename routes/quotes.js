const express = require("express");
const router = express.Router();
const { asyncHandler, csrfProtection } = require("./utils");
const db = require("../db/models");
const Quote = require("../public/javascripts/quoteModule");
const { requireAuth } = require('./../auth')  

router.get("/", requireAuth, asyncHandler(async (req, res, next) => {
		const NewQuote = new Quote();
		const quoteId = NewQuote.getRandomQuoteId();
		const newQ = await db.Quote.findByPk(quoteId);

		// const formattedQuote = await newQ.formatLongQuote();
		// console.log(newQ);
		res.json(newQ);
	})
);

module.exports = router;
