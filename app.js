const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const config= require('./config/database')
const bodyParser = require('body-parser');
const session = require('express-session')
const expressValidator = require('express-validator')


// Connect to DB
mongoose.connect(config.database)
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connect to mongoDB');
}); 

// Init app
const app = express()

// View engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Set public folder
app.use(express.static(path.join(__dirname, 'public')))

// Set global errors variable
app.locals.errors = null

// Body parser middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json()) 

// Express session middleware
app.use(
  session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
    // cookie: { secure: true },
  })
);

// Express validator
app.use(
  expressValidator({
    errorFormatter: function (param, msg, value) {
      var namespace = param.split('.'),
        root = namespace.shift(),
        formParam = root;

      while (namespace.length) {
        formParam += '[' + namespace.shift() + ']';
      }
      return {
        param: formParam,
        msg: msg,
        value: value,
      };
    },
  })
);

// Express messages middleware
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

// Set routes
const pages = require('./routes/pages')
const adminPages = require('./routes/admin_pages')
const adminCategories = require('./routes/admin_categories')

app.use('/', pages)
app.use('/admin/pages', adminPages);
app.use('/admin/categories', adminCategories);

// Start the server
const port = 3000
app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});