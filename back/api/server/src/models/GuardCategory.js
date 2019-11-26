'use strict';

module.exports = (sequelize, DataTypes) => {
  const GuardCategory = sequelize.define('GuardCategory', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    abbreviation: DataTypes.STRING
  }, {});
  GuardCategory.associate = models => {
    GuardCategory.hasOne(models.Species);
  };
  return GuardCategory;
};
