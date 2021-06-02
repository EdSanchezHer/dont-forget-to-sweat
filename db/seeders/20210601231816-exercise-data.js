'use strict';

const exercises = require("../../seed_data/exerciseSeedData");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Exercises', exercises)
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Exercises', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  }
};
