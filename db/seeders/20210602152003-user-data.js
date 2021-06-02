"use strict";
const bcrypt = require("bcryptjs");
const { getHash } = require("../../routes/utils");

const pword = getHash("password", 10);

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          fullName: "Jon Doe",
          email: "fake@email.com",
          bodyWeight: "194",
          bodyFatPercentage: 12,
          hashedPassword: pword,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
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
    return queryInterface.bulkDelete('People', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  },
};
