const express = require('express');
const router = express.Router();

// Get Category model
var Category = require('../models/category');

/*
 * GET category index
 */
router.get('/', function (req, res) {
  Category.find(function (err, categories) {
    if (err) return console.log(err);
    res.render('admin/categories', {
      categories: categories,
    });
  });
});


// Exports
module.exports = router;
