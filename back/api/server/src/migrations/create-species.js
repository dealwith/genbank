"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Species", {
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
      family_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Families",
          key: "id"
        }
      },
      guard_category_id: {
        type: Sequelize.INTEGER,
        references: {
          tableName: "GuardCategories",
          key: "id"
        },
        allowNull: false
      },
      sample_number: {
        type: Sequelize.STRING
      },
      bank_code: {
        type: Sequelize.STRING
      },
      bank_code_link: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.INTEGER
      },
      gathering_place: {
        type: Sequelize.STRING
      },
      year_gathering_place_link: {
        type: Sequelize.STRING
      },
      sequence__itst2: {
        type: Sequelize.STRING
      },
      sequence_itst2_link: {
        type: Sequelize.STRING
      },
      sequence_length_itst2: {
        type: Sequelize.INTEGER
      },
      coverage_percent_itst2: {
        type: Sequelize.INTEGER
      },
      ncbi_identity_itst2: {
        type: Sequelize.INTEGER
      },
      ncbi_code_itst2: {
        type: Sequelize.STRING
      },
      ncbi_code_itst2_link: {
        type: Sequelize.STRING
      },
      species_identification_result_itst2: {
        type: Sequelize.STRING
      },
      sequence_rbcl: {
        type: Sequelize.STRING
      },
      sequence_rbcl_link: {
        type: Sequelize.STRING
      },
      sequence_length_rbcl: {
        type: Sequelize.INTEGER
      },
      coverage_percent_rbcl: {
        type: Sequelize.INTEGER
      },
      ncbi_identity_rbcl: {
        type: Sequelize.INTEGER
      },
      ncbi_code_rbcl: {
        type: Sequelize.STRING
      },
      ncbi_code_rbcl_link: {
        type: Sequelize.STRING
      },
      species_identification_result_rbcl: {
        type: Sequelize.STRING
      },
      sequence_psb: {
        type: Sequelize.STRING
      },
      sequence_psb_link: {
        type: Sequelize.STRING
      },
      sequence_length_psb: {
        type: Sequelize.INTEGER
      },
      coverage_percent_psb: {
        type: Sequelize.INTEGER
      },
      ncbi_identity_psb: {
        type: Sequelize.INTEGER
      },
      ncbi_code_psb: {
        type: Sequelize.STRING
      },
      ncbi_code_psb_link: {
        type: Sequelize.STRING
      },
      species_identification_result_psb: {
        type: Sequelize.STRING
      },
      sequence_matk: {
        type: Sequelize.STRING
      },
      sequence_matk_link: {
        type: Sequelize.STRING
      },
      sequence_length_matk: {
        type: Sequelize.INTEGER
      },
      coverag_percent_matk: {
        type: Sequelize.INTEGER
      },
      ncbi_identity_matk: {
        type: Sequelize.INTEGER
      },
      ncbi_code_matk: {
        type: Sequelize.STRING
      },
      ncbi_code_matk_link: {
        type: Sequelize.STRING
      },
      species_identification_result_matk: {
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
    return queryInterface.dropTable("Species");
  }
};
