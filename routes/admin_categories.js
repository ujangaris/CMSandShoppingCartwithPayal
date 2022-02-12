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
/*
 * GET add category
 */
router.get('/add-category', function (req, res) {
  let title = '';
  res.render('admin/add_category', {
    title: title,
  });
});
/*
 * POST add category
 */
router.post('/add-category', function (req, res) {
  req.checkBody('title', 'Title must have a value.').notEmpty();

  var title = req.body.title;
  var slug = title.replace(/\s+/g, '-').toLowerCase();

  var errors = req.validationErrors();
  if (errors) {
    console.log(errors);
    res.render('admin/add_category', {
      errors: errors,
      title: title,
    });
  } else {
    Category.findOne({ slug: slug }, function (err, category) {
      if (category) {
        req.flash('danger', 'Category title exists, choose another.');
        res.render('admin/add_category', {
          title: title,
        });
      } else {
        var category = new Category({
          title: title,
          slug: slug,
        });
        category.save(function (err) {
          if (err) return console.log(err);
          req.flash('success', 'Category added!');
          res.redirect('/admin/categories');
        });
      }
    });
  }
});

// Exports
module.exports = router;
