'use strict';
module.exports = (sequelize, DataTypes) => {
  const Routine = sequelize.define('Routine', {
    userId: { type: DataTypes.INTEGER, allowNull: false},
    title: { type: DataTypes.STRING(50), allowNull: false, unique: true},
    completionTime: { type: DataTypes.INTEGER, allowNull: true},
    tags: {
      type: DataTypes.ENUM,
      values: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday", "Sunday", "Custom", "Temp"],
      defaultValue: "Temp"
    },
    expiration: { type: DataTypes.INTEGER, allowNull: true}
  }, {});


  Routine.associate = function(models) {
    // associations can be defined here
    const columnMapping = {
      through: 'WorkoutRoutine',
      otherKey: 'workoutId',
      foreignKey: 'routineId'
    }

    Routine.belongsTo(models.User, {foreignKey: 'userId'});
    Routine.belongsToMany(models.Workout, columnMapping );
  };
  return Routine;
};