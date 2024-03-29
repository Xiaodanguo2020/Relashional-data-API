"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class todoitems extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      todoitems.belongsTo(models.todolist, { foreignKey: "todolistId" });
      todoitems.belongsToMany(models.tag, {
        through: "itemTags",
        foreignKey: "todoItemId",
      });
    }
  }
  todoitems.init(
    {
      task: DataTypes.STRING,
      deadline: DataTypes.STRING,
      important: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "todoitems",
    }
  );
  return todoitems;
};
