'use strict';
module.exports = (sequelize, DataTypes) => {
  const Workout = sequelize.define('Workout', {
    weight: DataTypes.INTEGER,
    resistance: DataTypes.INTEGER,
    repetitions: DataTypes.INTEGER,
    sets: DataTypes.INTEGER,
    distance: DataTypes.INTEGER,
    exerciseId: DataTypes.INTEGER
  }, {});
  Workout.associate = function(models) {
    // associations can be defined here
  };
  return Workout;
};