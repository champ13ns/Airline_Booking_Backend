'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addConstraint('Airports',{

      type:'foreign key',
      fields : ['cityId'],
      name : 'city_fkey_constraint',
      references : {
        table :'Cities',
        fields : ['id']
      },
      onUpdate :'cascade',
      onDelete:'cascade'
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeConstraint('Airports','city_fkey_constraint');
  }
};
