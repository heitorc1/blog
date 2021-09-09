'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'lastname')
    await queryInterface.addColumn('Users', 'lastName', {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    })

  },

  down: async (queryInterface, Sequelize) => {

  }
};
