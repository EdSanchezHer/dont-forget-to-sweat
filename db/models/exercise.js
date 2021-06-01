'use strict';
module.exports = (sequelize, DataTypes) => {
  const Exercise = sequelize.define('Exercise', {
    muscleGroup: DataTypes.ENUM,
    muscleName: DataTypes.STRING,
    exerciseTitle: DataTypes.STRING,
    exerciseType: DataTypes.ENUM,
    imageLocation: DataTypes.STRING,
    tips: DataTypes.STRING,
    spotter: DataTypes.BOOLEAN
  }, {});
  Exercise.associate = function(models) {
    // associations can be defined here
  };
  return Exercise;
};