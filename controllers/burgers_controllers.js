// Node Dependencies
const express = require('express');
const router = express.Router();
const models = require('../models'); // Pulls out the Burger Models


// Extracts the sequelize connection from the models object
const sequelizeConnection = models.sequelize;

// Sync the tables
//sequelizeConnection.sync();


// Create routes
// ----------------------------------------------------

// Index Redirect
router.get('/', (req, res) => {
  res.redirect('/index');
});



// Index Page (render all burgers to DOM)
router.get('/index', (req, res) => {

  // Sequelize Query to get all burgers from database 
  models.burgers.findAll().then((data) => {

    // Pass the returned data into a Handlebars object and then render it
    const hbsObject = { burgers: data };
    // console.log(data);
    res.render('index', hbsObject);

  })

});



// Create a New Burger
router.post('/burger/create', (req, res) => {

  // Sequelize Query to add new burger to database
  models.burgers.create(
    {
      burger_name: req.body.burger_name,
      devoured: false
    }
  ).then(()=>{
    // After the burger is added to the database, refresh the page
    res.redirect('/index');
  });

});

// Sequelize Query to devour a burger
router.post('/burger/eat/:id', (req, res) => {
  
  // update selected burger
  models.burgers.update({
    devoured: true
  },
    {
      where: {
        id: req.params.id
      }
    }
  ).then(() => {
    res.redirect('/index');
  });
});
// ----------------------------------------------------


// Export routes
module.exports = router;