"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Families",
      [
        {
          name: "Papaya",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lol",
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
