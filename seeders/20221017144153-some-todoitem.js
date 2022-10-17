"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "todoitems",
      [
        {
          task: "Shoping for Grossaries",
          deadline: "21th June",
        },
        {
          task: "Put launtry in washing machine",
          deadline: "22th June",
        },
        {
          task: "Put cat food in the plate,add water too",
          deadline: "23th June",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("todoitems", null, {});
  },
};
