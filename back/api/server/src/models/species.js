'use strict';
module.exports = (sequelize, DataTypes) => {
  const Species = sequelize.define('Species', {
    abc: DataTypes.STRING,
    name: DataTypes.STRING,
    name_link: DataTypes.STRING,
    guardCategory: DataTypes.STRING,
    sampleNumber: DataTypes.STRING,
    bankCode: DataTypes.STRING,
    bankCode_link: DataTypes.STRING,
    year_gatheringPlace: DataTypes.STRING,
    year_gatheringPlace_link: DataTypes.STRING,
    sequenceITS2: DataTypes.STRING,
    sequenceITS2_link: DataTypes.STRING,
    sequenceLengthITS2: DataTypes.INTEGER,
    coveragePercentITS2: DataTypes.INTEGER,
    NcbiIdentityITS2: DataTypes.INTEGER,
    NcbiCodeITS2: DataTypes.STRING,
    NcbiCodeITS2_link: DataTypes.STRING,
    speciesIdentificationResultITS2: DataTypes.STRING,
    sequenceRbCl: DataTypes.STRING,
    sequenceRbCl_link: DataTypes.STRING,
    sequenceLengthRbCl: DataTypes.INTEGER,
    coveragePercentRbCl: DataTypes.INTEGER,
    NcbiIdentityRbCl: DataTypes.INTEGER,
    NcbiCodeRbCl: DataTypes.STRING,
    NcbiCodeRbCl_link: DataTypes.STRING,
    speciesIdentificationResultRbCl: DataTypes.STRING,
    sequencePSB: DataTypes.STRING,
    sequencePSB_link: DataTypes.STRING,
    sequenceLengthPSB: DataTypes.INTEGER,
    coveragePercentPSB: DataTypes.INTEGER,
    NcbiIdentityPSB: DataTypes.INTEGER,
    NcbiCodePSB: DataTypes.STRING,
    NcbiCodePSB_link: DataTypes.STRING,
    speciesIdentificationResultPSB: DataTypes.STRING,
    sequenceMATK: DataTypes.STRING,
    sequenceMATK_link: DataTypes.STRING,
    sequenceLengthMATK: DataTypes.INTEGER,
    coveragePercentMATK: DataTypes.INTEGER,
    NcbiIdentityMATK: DataTypes.INTEGER,
    NcbiCodeMATK: DataTypes.STRING,
    NcbiCodeMATK_link: DataTypes.STRING,
    speciesIdentificationResultMATK: DataTypes.STRING,
    
  }, {});
  Species.associate = function(models) {
    // associations can be defined here
  };
  return Species;
};

