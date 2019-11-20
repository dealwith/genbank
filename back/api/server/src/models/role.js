'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    role: DataTypes.STRING
  }, {});
  Role.associate = (models) => {
    Role.belongsTo(models.User, {});
  };
  return Role;
};