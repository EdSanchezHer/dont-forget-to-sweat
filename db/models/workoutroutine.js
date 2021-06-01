'use strict';
module.exports = (sequelize, DataTypes) => {
  const WorkoutRoutine = sequelize.define('WorkoutRoutine', {
    workoutId: DataTypes.INTEGER,
    routineId: DataTypes.INTEGER
  }, {});
  WorkoutRoutine.associate = function(models) {
    // associations can be defined here
  };
  return WorkoutRoutine;
};