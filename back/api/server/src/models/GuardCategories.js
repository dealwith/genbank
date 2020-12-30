'use strict';

module.exports = (sequelize, DataTypes) => {
  const GuardCategories = sequelize.define('GuardCategories', {
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

  GuardCategories.associate = models => {
    GuardCategories.hasMany(models.Species, { foreignKey: "guard_category_id" });
  };

  return GuardCategories;
};
