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
          todolistId: 1,
          important: true,
        },
        {
          task: "Put launtry in washing machine",
          deadline: "22th June",
          todolistId: 3,
          important: false,
        },
        {
          task: "Put cat food in the plate,add water too",
          deadline: "23th June",
          todolistId: 4,
          important: true,
        },
        {
          task: "Put catnip outside,add water too",
          deadline: "24th June",
          todolistId: 4,
          important: false,
        },
        {
          task: "take laundry out and hangthem",
          deadline: "25th June",
          todolistId: 3,
          important: true,
        },
        {
          task: "order online the innisfree cosmetics",
          deadline: "26th June",
          todolistId: 1,
          important: false,
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
