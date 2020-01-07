'use strict';
module.exports = (sequelize, DataTypes) => {
  const Family = sequelize.define('Family', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING
  }, {});
  Family.associate = function(models) {
    Family.belongsTo(models.Species)
  };
  return Family;
};