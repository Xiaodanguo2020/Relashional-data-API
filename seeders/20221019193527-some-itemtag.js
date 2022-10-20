"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "itemTags",
      [
        {
          todoItemId: 1,
          tagId: 3,
        },
        {
          todoItemId: 2,
          tagId: 1,
        },
        {
          todoItemId: 3,
          tagId: 1,
        },
        {
          todoItemId: 1,
          tagId: 1,
        },
        {
          todoItemId: 5,
          tagId: 1,
        },
        {
          todoItemId: 6,
          tagId: 1,
        },
        {
          todoItemId: 5,
          tagId: 3,
        },
        {
          todoItemId: 4,
          tagId: 3,
        },
        {
          todoItemId: 1,
          tagId: 3,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("itemTags", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
