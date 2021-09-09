'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Posts', 'title', {
      allowNull: false,
      unique: true
    })
    await queryInterface.changeColumn('Posts', 'subtitle', {
      allowNull: false,
      unique: true
    })
    await queryInterface.changeColumn('Posts', 'body', {
      type: Sequelize.DataTypes.TEXT,
      allowNull: false
    })
    await queryInterface.changeColumn('Posts', 'author', {
      allowNull: false
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
