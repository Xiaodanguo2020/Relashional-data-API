"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "todolists",
      [
        {
          name: "Shopping",
          userId: 1,
        },
        {
          name: "Cleaning",
          userId: 2,
        },
        {
          name: "Laundry",
          userId: 2,
        },
        {
          name: "Feed the cat",
          userId: 1,
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
