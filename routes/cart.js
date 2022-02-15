const express = require('express');
const router = express.Router();

// Get Page model
var Product = require('../models/product');

/*
 * GET add product to cart
 */
router.get('/add/:product', function (req, res) {
  var slug = req.params.product;

  Product.findOne({ slug: slug }, function (err, p) {
    if (err) console.log(err);

    if (typeof req.session.cart == 'undefined') {
      req.session.cart = [];
      req.session.cart.push({
        title: slug,
        qty: 1,
        price: parseFloat(p.price).toFixed(2),
        image: '/product_images/' + p.id + '/' + p.image,
      });
    } else {
      var cart = req.session.cart;
      var newItem = true;
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].title == slug) {
          cart[i].qty++;
          newItem = false;
          break;
        }
      }
      if (newItem) {
        cart.push({
          title: slug,
          qty: 1,
          price: parseFloat(p.price).toFixed(2),
          image: '/product_images/' + p.id + '/' + p.image,
        });
      }
    }
    console.log(req.session.cart);
    req.flash('success', 'product added!');
    res.redirect('back');
  });
});

// Exports
module.exports = router;
