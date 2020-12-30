"use strict";

module.exports = (sequelize, DataTypes) => {
  const Families = sequelize.define("Families", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: DataTypes.STRING
    }
  );
  Families.associate = models => {
    Families.hasMany(models.Species, { foreignKey: "family_id" });
  };

  return Families;
};
