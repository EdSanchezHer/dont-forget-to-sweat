'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Workouts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      weight: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      resistance: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      repetitions: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      sets: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      distance: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      exerciseId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: Exercises }
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
    return queryInterface.dropTable('Workouts');
  }
};