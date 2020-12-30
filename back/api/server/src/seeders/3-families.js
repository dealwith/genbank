"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Families",
      [
        {
          name: "Cats",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Betulaceae",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Families", null, {});
  }
};
