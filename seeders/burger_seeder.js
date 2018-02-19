'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    // Add seeded burgers to database (note that the date needs to be manually added here)
    return queryInterface.bulkInsert('burgers', [
      {burger_name: 'The Wimpy', devoured: false, createdAt: new Date(), updatedAt: new Date()},
      {burger_name: 'The Royal', devoured: false, createdAt: new Date(), updatedAt: new Date()},
      {burger_name: 'The Bleu Cheese King', devoured: false, createdAt: new Date(), updatedAt: new Date()},
    ], {});

  },

  down: function (queryInterface, Sequelize) {
    
    // Remove the seeded burgers (note the "{truncate: true}", which resets the primary keys)
    return queryInterface.bulkDelete('burgers', null, {truncate : true});
    
  }

};