const express = require('express');
const router = express.Router();

// Get Page model
var Product = require('../models/product');

/*
 * GET all products
 */
router.get('/', function (req, res) {

  Product.find(function (err, products) {
    if (err) console.log(err);

    res.render('all_products', {
      title: 'All products',
      products: products,
    });
  });
});

// Exports
module.exports = router;
