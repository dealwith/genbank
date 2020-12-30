'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Roles', [
      {
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        role: 'limited-user',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        role: 'super-admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface
    await queryInterface.bulkDelete('Roles', null, {});
  }
};

