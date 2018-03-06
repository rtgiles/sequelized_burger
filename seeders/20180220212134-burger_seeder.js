'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('burgers', [
    {burger_name: 'The Wimpy', devoured: false, createdAt: new Date(), updatedAt: new Date()},
    {burger_name: 'The Royal', devoured: false, createdAt: new Date(), updatedAt: new Date()},
    {burger_name: 'The Bleu Cheese King', devoured: false, createdAt: new Date(), updatedAt: new Date()},
    ], {});  
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
