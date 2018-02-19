// Node Dependencies
var express = require('express');
var router = express.Router();
var models = require('../models'); // Pulls out the Burger Models


// Extracts the sequelize connection from the models object
var sequelizeConnection = models.sequelize;

// Sync the tables
sequelizeConnection.sync();


// Create routes
// ----------------------------------------------------

// Index Redirect
router.get('/', function (req, res) {
  res.redirect('/index');
});



// Index Page (render all burgers to DOM)
router.get('/index', function (req, res) {

  // Sequelize Query to get all burgers from database 
  models.burgers.findAll().then(function(data){

    // Pass the returned data into a Handlebars object and then render it
    var hbsObject = { burgers: data };
    // console.log(data);
    res.render('index', hbsObject);

  })

});



// Create a New Burger
router.post('/burger/create', function (req, res) {

  // Sequelize Query to add new burger to database
  models.burgers.create(
    {
      burger_name: req.body.burger_name,
      devoured: false
    }
  ).then(function(){
    // After the burger is added to the database, refresh the page
    res.redirect('/index');
  });

});

// ----------------------------------------------------


// Export routes
module.exports = router;