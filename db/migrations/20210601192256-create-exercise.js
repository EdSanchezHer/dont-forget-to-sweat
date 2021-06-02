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
        allowNull: false,
        type: Sequelize.DataTypes.ENUM,
        values: ['Arms', 'Legs', 'Core', 'Chest', 'Back', 'Cardio']
      },
      muscleName: {
        allowNull: false,
        type: Sequelize.STRING(75),
      },
      exerciseTitle: {
        allowNull: false,
        type: Sequelize.STRING(100),
        unique: true
      },
      exerciseType: {
        allowNull: false,
        type: Sequelize.DataTypes.ENUM('Power-lift', 'Machine', 'Cardio', 'Calisthenics')
      },
      imageLocation: {
        allowNull: true,
        type: Sequelize.STRING(255)
      },
      tips: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      spotter: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        default: false,
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