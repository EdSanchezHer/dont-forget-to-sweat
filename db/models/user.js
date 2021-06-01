'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    hashedPassword: DataTypes.STRING,
    bodyWeight: DataTypes.INTEGER,
    bodyFatPercentage: DataTypes.DECIMAL,
    fitnessLevel: {
      type: DataTypes.ENUM,
      values: ["weight-loss", "strength-training", "general-fitness", "conditioning", "muscle-tone"],
      defaultValue: "general-fitness"
      }
    }, 
  {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};