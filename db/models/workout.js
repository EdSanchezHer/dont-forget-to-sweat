'use strict';
module.exports = (sequelize, DataTypes) => {
  const Workout = sequelize.define('Workout', {
    weight: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    resistance: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    repetitions: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sets: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    distance: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    exerciseId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {})
  Workout.associate = function(models) {
    const columnMapping = {
      through: "WorkoutRoutine",
      other: "routineId",
      foreignKey: "workoutId"
    }

    Workout.belongsTo( models.Exercise, { foreignKey: "exerciseId" } ),
    Workout.belongsToMany( models.Routine, columnMapping )
  };
  return Workout;
};