'use strict';
module.exports = (sequelize, DataTypes) => {
  const WorkoutRoutine = sequelize.define('WorkoutRoutine', {
    workoutId: { type: DataTypes.INTEGER, allowNull: false},
    routineId: { type: DataTypes.INTEGER, allowNull: false}
  }, {});
  WorkoutRoutine.associate = function(models) {
    // associations can be defined here
  };
  return WorkoutRoutine;
};