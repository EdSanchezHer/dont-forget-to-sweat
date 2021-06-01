'use strict';
module.exports = (sequelize, DataTypes) => {
  const Routine = sequelize.define('Routine', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    completionTime: DataTypes.INTEGER,
    tags: DataTypes.ENUM,
    expiration: DataTypes.INTEGER
  }, {});
  Routine.associate = function(models) {
    // associations can be defined here
  };
  return Routine;
};