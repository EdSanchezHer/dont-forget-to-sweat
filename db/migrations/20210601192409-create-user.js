'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        allowNull: false,
        type: Sequelize.STRING(75)
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(75),
        unique: true
      },
      hashedPassword: {
        allowNull: false,
        type: Sequelize.STRING.BINARY
      },
      bodyWeight: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      bodyFatPercentage: {
        allowNull: true,
        type: Sequelize.DECIMAL
      },
      fitnessLevel: {
        allowNull: true,
        type: Sequelize.DataTypes.ENUM("weight-loss", "strength-training", "general-fitness", "conditioning", "muscle-tone")
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
    return queryInterface.dropTable('Users');
  }
};