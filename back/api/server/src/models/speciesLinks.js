'use strict';
module.exports = (sequelize, DataTypes) => {
  const Species = sequelize.define('Species', {
    name_link: DataTypes.STRING,
    bankCode_link: DataTypes.STRING,
    year_gatheringPlace_link: DataTypes.STRING,
    sequenceITS2_link: DataTypes.STRING,
    NcbiCodeITS2_link: DataTypes.STRING,
    sequenceRbCl_link: DataTypes.STRING,
    NcbiCodeRbCl_link: DataTypes.STRING,
    sequencePSB_link: DataTypes.STRING,
    NcbiCodePSB_link: DataTypes.STRING,
    sequenceMATK_link: DataTypes.STRING,
    NcbiCodeMATK_link: DataTypes.STRING,
  }, {});
  Species.associate = function(models) {
    // associations can be defined here
  };
  return Species;
};

