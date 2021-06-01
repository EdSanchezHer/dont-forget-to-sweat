'use strict';
module.exports = (sequelize, DataTypes) => {
  const Exercise = sequelize.define('Exercise', {
    muscleGroup: {
      type: DataTypes.ENUM,
      values: ['Arms', 'Legs', 'Core', 'Chest', 'Back', 'Cardio']
    },
    muscleName: DataTypes.STRING,
    exerciseTitle: DataTypes.STRING,
    exerciseType: {
      type: DataTypes.ENUM,
      values: ['Power-lift', 'Machine', 'Cardio', 'Calisthenics']
    },
    imageLocation: DataTypes.STRING,
    tips: DataTypes.STRING,
    spotter: DataTypes.BOOLEAN
  }, {});
  Exercise.associate = function(models) {
    // associations can be defined here
  };
  return Exercise;
};