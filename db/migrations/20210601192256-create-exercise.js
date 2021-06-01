'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Exercises', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      muscleGroup: {
        type: Sequelize.ENUM
      },
      muscleName: {
        type: Sequelize.STRING
      },
      exerciseTitle: {
        type: Sequelize.STRING
      },
      exerciseType: {
        type: Sequelize.ENUM
      },
      imageLocation: {
        type: Sequelize.STRING
      },
      tips: {
        type: Sequelize.STRING
      },
      spotter: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Exercises');
  }
};