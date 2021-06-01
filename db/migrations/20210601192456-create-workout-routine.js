'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('WorkoutRoutines', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      workoutId: {
        allowNull: false, 
        type: Sequelize.INTEGER,
        references: {model: 'Workouts'}
      },
      routineId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Routines'}
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
    return queryInterface.dropTable('WorkoutRoutines');
  }
};