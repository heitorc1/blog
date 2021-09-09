'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /* await queryInterface.addColumn('Users', 'lastName', {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    }) */
    await queryInterface.changeColumn('Users', 'firstName', { allowNull: false })
    
    await queryInterface.changeColumn('Users', 'email', {
      allowNull: false,
      unique: true
    })
  },

  down: async (queryInterface, Sequelize) => {
    /* await queryInterface.removeColumn('Users', 'lastName') */
  }
};
