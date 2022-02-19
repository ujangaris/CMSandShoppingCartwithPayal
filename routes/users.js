const express = require('express');
const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcryptjs');

// Get User model
var User = require('../models/user');

/*
 * GET register
 */
router.get('/register', function (req, res) {
  res.render('register', {
    title: 'Register',
  });
});
/*
 * POST register
 */
router.post('/register', function (req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var username = req.body.username;
  var password = req.body.password;
  var password2 = req.body.password2;

  req.checkBody('name', 'Name is reuired!').notEmpty();
  req.checkBody('email', 'Email is reuired!').isEmail();
  req.checkBody('username', 'Username is reuired!').notEmpty();
  req.checkBody('password', 'Password is reuired!').notEmpty();
  req.checkBody('password2', 'Password do not match').equals(password);

  var errors = req.validationErrors();
  if (errors) {
    res.render('register', {
      errors: errors,
      title: 'Register',
    });
  } else {
    User.findOne({ username: username }, function (err, user) {
      if (err) {
        console.log(err);
      }
      if (user) {
        req.flash('danger', 'Username exists, choose another!');
        res.redirect('/users/register');
      } else {
        var user = new User({
          name: name,
          email: email,
          username: username,
          password: password,
          admin: 0, // => ini dinyalain kalo udah ada admin yang sudah terdaftar
          // admin: 1, // => ini dinyalain /digunain jika belum ada admin yang terdaftar
        });
        bcrypt.genSalt(10, function (err, salt) {
          bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) console.log(err);

            user.password = hash;

            user.save(function (err) {
              if (err) {
                console.log(err);
              } else {
                req.flash('success', 'You are now registered!');
                res.redirect('/users/login');
              }
            });
          });
        });
      }
    });
  }
});

// Exports
module.exports = router;