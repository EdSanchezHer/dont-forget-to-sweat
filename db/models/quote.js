'use strict';
module.exports = (sequelize, DataTypes) => {
  const Quote = sequelize.define('Quote', {
    author: { type: DataTypes.STRING(75), allowNull: true},
    quote: { type: DataTypes.TEXT, allowNull: false}
  }, {});
  Quote.associate = function(models) {
    // associations can be defined here
  };
  return Quote;
};