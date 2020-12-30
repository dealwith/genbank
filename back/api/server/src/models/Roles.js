'use strict';

export default (sequelize, DataTypes) => {
  const Roles = sequelize.define('Roles', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    role: {
      type: DataTypes.STRING,
      unique: true
    }
  }, {});

  Roles.associate = models => {
    Roles.hasOne(models.Users);
  };

  return Roles;
};
