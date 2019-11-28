'use strict';

module.exports = (sequelize, DataTypes) => {
  const GuardCategory = sequelize.define('GuardCategory', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    abbreviation: {
      type: DataTypes.STRING,
      unique: true
    }
  }, {});
  GuardCategory.associate = models => {
    GuardCategory.hasOne(models.Species);
  };
  return GuardCategory;
};
