"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "todolists",
      [
        {
          name: "Shopping",
        },
        {
          name: "Cleaning",
        },
        {
          name: "Laundry",
        },
        {
          name: "Feed the cat",
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

    await queryInterface.bulkDelete("todolists", null, {});
  },
};
