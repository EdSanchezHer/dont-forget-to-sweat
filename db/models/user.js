'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: { type: DataTypes.STRING(75), allowNull: false},
    email: { type: DataTypes.STRING(75), allowNull: false, unique: true},
    hashedPassword: { type: DataTypes.STRING.BINARY, allowNull: false},
    bodyWeight: { type: DataTypes.INTEGER, allowNull: true},
    bodyFatPercentage: { type: DataTypes.DECIMAL, allowNull: true},
    fitnessLevel: {
      type: DataTypes.ENUM,
      values: ["weight-loss", "strength-training", "general-fitness", "conditioning", "muscle-tone"],
      defaultValue: "general-fitness"
      }
    }, 
  {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Routine, {foreignKey: 'userId'})
    User.hasMany(models.Workout, { foreignKey: 'userId' })
  };
  return User;
};