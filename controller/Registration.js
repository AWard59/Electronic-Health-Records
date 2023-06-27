const express = require('express')
const router = express.Router()
const pool = require('../db')
router.get('/', (req, res) => {
	res.render('registration-form')
})
router.post('/', (req, res) => {
	res.redirect('/patients')
})
module.exports = router
