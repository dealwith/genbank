"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Species",
      [
        {
          name: "NIKOLAYCHIK",
          name_link: "https://www.pulapinyvici.org",
          family_id: "3",
          guard_category_id: "4",
          sample_number: "649",
          bank_code: "Sunt ad natus sapien",
          bank_code_link: "https://www.vefureqyr.ca",
          year: "2014",
          gathering_place: "Ducimus qui id omni",
          year_gathering_place_link: "https://www.fuzudijufal.org ",
          sequence__itst2: "Accusantium fuga Se",
          sequence_itst2_link: "https://www.moc.cm",
          sequence_length_itst2: "57",
          coverage_percent_itst2: "72",
          ncbi_identity_itst2: "80",
          ncbi_code_itst2: "Aute quam quo sint o",
          ncbi_code_itst2_link: "https://www.napot.mobi",
          species_identification_result_itst2: "31",
          sequence_rbcl: "Similique consequatu",
          sequence_rbcl_link: "https://www.sajyc.org.au",
          sequence_length_rbcl: "42",
          coverage_percent_rbcl: "47",
          ncbi_identity_rbcl: "86",
          ncbi_code_rbcl: "Autem ut commodo rep",
          ncbi_code_rbcl_link: "https://www.wohojevu.cm",
          species_identification_result_rbcl: "88",
          sequence_psb: "Consequat Ex in ius",
          sequence_psb_link: "https://www.myjima.com",
          sequence_length_psb: "16",
          coverage_percent_psb: "16",
          ncbi_identity_psb: "76",
          ncbi_code_psb: "Iure culpa adipisci ",
          ncbi_code_psb_link: "https://www.nep.me.uk",
          species_identification_result_psb: "31",
          sequence_matk: "Ullam sed corporis d",
          sequence_matk_link: "https://www.nif.biz",
          sequence_length_matk: "22",
          coverag_percent_matk: "60",
          ncbi_identity_matk: "54",
          ncbi_code_matk: "Suscipit aperiam sap",
          ncbi_code_matk_link: "https://www.viwynygeq.me.uk",
          species_identification_result_matk: "56"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Species", null, {});
  }
};
