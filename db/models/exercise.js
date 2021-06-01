'use strict';
module.exports = (sequelize, DataTypes) => {
  const Exercise = sequelize.define('Exercise', {
    muscleGroup: {
      type: DataTypes.ENUM,
      values: ['Arms', 'Legs', 'Core', 'Chest', 'Back', 'Cardio']
    },
    muscleName: {type: DataTypes.STRING(75), allowNull: false, unique: true},
    exerciseTitle: { type: DataTypes.STRING(100), allowNull: false, unique: true},
    exerciseType: {
      type: DataTypes.ENUM,
      values: ['Power-lift', 'Machine', 'Cardio', 'Calisthenics']
    },
    imageLocation:{ type: DataTypes.STRING(255), allowNull: true},
    tips: { type: DataTypes.TEXT, allowNull: true},
    spotter: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false}
  }, {});
  Exercise.associate = function(models) {
    // associations can be defined here
    Exercise.hasMany(models.Workout, {foreignKey: 'exerciseId'});
  };
  return Exercise;
};