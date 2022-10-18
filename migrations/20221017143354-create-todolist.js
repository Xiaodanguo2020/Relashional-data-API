"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("todolists", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },

      userId: {
        type: Sequelize.INTEGER,
        references: {
          key: "id",
          model: "users",
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("todolists");
  },
};
