'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Routines', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        refrences: {model: 'Users'}
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(50),
        unique: true
      },
      completionTime: {
        allowNull: true,
        type: Sequelize.TIME
      },
      tags: {
        type: Sequelize.DataTypes.ENUM("Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday", "Sunday", "Custom", "Temp"),
        default: "Temp"
      },
      expiration: {
        allowNull: true,
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('Routines');
  }
};