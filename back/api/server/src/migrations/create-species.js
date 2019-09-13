'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Species', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      name_link: {
        type: Sequelize.STRING
      },
      guardCategory: {
        type: Sequelize.STRING
      },
      sampleNumber: {
        type: Sequelize.STRING
      },
      bankCode: {
        type: Sequelize.STRING
      },
      bankCode_link: {
        type: Sequelize.STRING
      },
      year_gatheringPlace: {
        type: Sequelize.STRING
      },
      year_gatheringPlace_link: {
        type: Sequelize.STRING
      },
      sequenceITS2: {
        type: Sequelize.STRING,
      },
      sequenceITS2_link: {
        type: Sequelize.STRING,
      },
      sequenceLengthITS2: {
        type: Sequelize.INTEGER,
      },
      coveragePercentITS2: {
        type: Sequelize.INTEGER
      },
      NcbiIdentityITS2: {
        type: Sequelize.INTEGER,
      },
      NcbiCodeITS2: {
        type: Sequelize.STRING,
      },
      NcbiCodeITS2_link: {
        type: Sequelize.STRING,
      },
      speciesIdentificationResultITS2: {
        type: Sequelize.STRING
      },
      sequenceRbCl: {
        type: Sequelize.STRING
      },
      sequenceRbCl_link: {
        type: Sequelize.STRING
      },
      sequenceLengthRbCl: {
        type: Sequelize.INTEGER,
      },
      coveragePercentRbCl: {
        type: Sequelize.INTEGER,
      },
      NcbiIdentityRbCl: {
        type: Sequelize.INTEGER,
      },
      NcbiCodeRbCl: {
        type: Sequelize.STRING,
      },
      NcbiCodeRbCl_link: {
        type: Sequelize.STRING,
      },
      speciesIdentificationResultRbCl: {
        type: Sequelize.STRING,
      },
      sequencePSB: {
        type: Sequelize.STRING,
      },
      sequencePSB_link: {
        type: Sequelize.STRING,
      },
      sequenceLengthPSB: {
        type: Sequelize.INTEGER,
      },
      coveragePercentPSB: {
        type: Sequelize.INTEGER,
      },
      NcbiIdentityPSB: {
        type: Sequelize.INTEGER,
      },
      NcbiCodePSB: {
        type: Sequelize.STRING,
      },
      NcbiCodePSB_link: {
        type: Sequelize.STRING,
      },
      speciesIdentificationResultPSB: {
        type: Sequelize.STRING,
      },
      sequenceMATK: {
        type: Sequelize.STRING,
      },
      sequenceMATK_link: {
        type: Sequelize.STRING,
      },
      sequenceLengthMATK: {
        type: Sequelize.INTEGER,
      },
      coveragePercentMATK: {
        type: Sequelize.INTEGER,
      },
      NcbiIdentityMATK: {
        type: Sequelize.INTEGER,
      },
      NcbiCodeMATK: {
        type: Sequelize.STRING,
      },
      NcbiCodeMATK_link: {
        type: Sequelize.STRING,
      },
      speciesIdentificationResultMATK: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Species');
  }
};