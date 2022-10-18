const User = require("./models").user;
const Todolist = require("./models").todolist;
const TodoItem = require("./models").todoitems;

const getTodolist = async () => {
  const theList = await Todolist.findAll({ raw: true, include: User });
  console.log("list", theList);
};

// getTodolist();

const getTodoitem = async () => {
  const theItem = await TodoItem.findAll({
    raw: true,
    include: { model: Todolist, attributes: ["name"] },
  });
  console.log("item", theItem);
};

getTodoitem();
