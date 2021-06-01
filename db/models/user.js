'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: { type: DataTypes.STRING(75), allowNull: false},
    email: { type: DataTypes.STRING(75), allowNull: false, unique: true},
    hashedPassword: { type: DataTypes.STRING.BINARY, allowNull: false},
    bodyWeight: { type: DataTypes.INTEGER, allowNull: false},
    bodyFatPercentage: { type: DataTypes.DECIMAL, allowNull: false},
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
  };
  return User;
};