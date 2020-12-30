'use strict';

export default (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    verificated: DataTypes.BOOLEAN
  }, {});

  return Users;
};
