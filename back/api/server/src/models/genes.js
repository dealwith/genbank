'use strict';
module.exports = (sequelize, DataTypes) => {
  const Genes = sequelize.define('Genes', {
    title: DataTypes.STRING,
    genes: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Genes.associate = function(models) {
    // associations can be defined here
  };
  return Genes;
};