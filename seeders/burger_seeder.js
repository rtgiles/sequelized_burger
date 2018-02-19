'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    // Add seeded burgers to database 
    return queryInterface.bulkInsert('burgers', [
      {burger_name: 'The Wimpy', devoured: false, createdAt: new Date(), updatedAt: new Date()},
      {burger_name: 'The Royal', devoured: false, createdAt: new Date(), updatedAt: new Date()},
      {burger_name: 'The Blue Cheese King', devoured: false, createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    
    // Remove the seeded burgers 
    return queryInterface.bulkDelete('burgers', null, {truncate : true});
    
  }

};