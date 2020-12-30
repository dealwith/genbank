'use strict';

export default (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
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
  Role.associate = models => {
    Role.hasOne(models.User);
  };
  return Role;
};
