const express = require('express');
const router = express.Router();
const passport = require('passport')
const bcrypt = require('bcryptjs')

// Get User model
var User = require('../models/user');

/*
 * GET /
 */
router.get('/register', function (req, res) {
  res.render('register', {
    title: 'Register'
  })
});


// Exports
module.exports = router;
