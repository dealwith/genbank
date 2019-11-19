'use strict';
module.exports = (sequelize, DataTypes) => {
  const Species = sequelize.define('Species', {
    name: {type:DataTypes.STRING, field: "name"},
    name_link: DataTypes.STRING,
    guard_category: DataTypes.STRING,
    sample_number: DataTypes.STRING,
    bank_code: DataTypes.STRING,
    bank_code_link: DataTypes.STRING,
    year_gathering_place: DataTypes.STRING,
    year_gathering_place_link: DataTypes.STRING,
    sequence__itst2: DataTypes.STRING,
    sequence_itst2_link: DataTypes.STRING,
    sequence_length_itst2: DataTypes.INTEGER,
    coverage_percent_itst2: DataTypes.INTEGER,
    ncbi_identity_itst2: DataTypes.INTEGER,
    ncbi_code_itst2: DataTypes.STRING,
    ncbi_code_itst2_link: DataTypes.STRING,
    species_identification_result_itst2: DataTypes.STRING,
    sequence_rbcl: DataTypes.STRING,
    sequence_rbcl_link: DataTypes.STRING,
    sequence_length_rbcl: DataTypes.INTEGER,
    coverage_percent_rbcl: DataTypes.INTEGER,
    ncbi_identity_rbcl: DataTypes.INTEGER,
    ncbi_code_rbcl: DataTypes.STRING,
    ncbi_code_rbcl_link: DataTypes.STRING,
    species_identification_result_rbcl: DataTypes.STRING,
    sequence_psb: DataTypes.STRING,
    sequence_psb_link: DataTypes.STRING,
    sequence_length_psb: DataTypes.INTEGER,
    coverage_percent_psb: DataTypes.INTEGER,
    ncbi_identity_psb: DataTypes.INTEGER,
    ncbi_code_psb: DataTypes.STRING,
    ncbi_code_psb_link: DataTypes.STRING,
    species_identification_result_psb: DataTypes.STRING,
    sequence_matk: DataTypes.STRING,
    sequence_matk_link: DataTypes.STRING,
    sequence_length_matk: DataTypes.INTEGER,
    coverag_percent_matk: DataTypes.INTEGER,
    ncbi_identity_matk: DataTypes.INTEGER,
    ncbi_code_matk: DataTypes.STRING,
    ncbi_code_matk_link: DataTypes.STRING,
    species_identification_result_matk: DataTypes.STRING,
  }, {});
  Species.associate = function(models) {
    // associations can be defined here
  };
  return Species;
};

