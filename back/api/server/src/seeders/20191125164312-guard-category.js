'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('GuardCategory', [
      {
        abbreviation: 'I (CR)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        abbreviation: 'II(EN)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        abbreviation: 'III(VU)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        abbreviation: ' IV(NT)',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        abbreviation: 'ПО',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        abbreviation: 'НО',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('GuardCategory', null, {});

  }
};
