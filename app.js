const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const config= require('./config/database')

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

app.get('/', function(req, res){
    res.render('index',{
        title: 'Home'
    })
})

// Start the server
const port = 3000
app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});