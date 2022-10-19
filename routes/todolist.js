const { Router } = require("express");
const express = require("express");
const Todolist = require("../models").todolist;
const Todoitem = require("../models").todoitems;
const User = require("../models").user;

const router = new Router();

router.get("/todolist", async (request, response, next) => {
  const todolist = await Todolist.findAll();
  console.log("this is my todolist", todolist);
  response.send(todolist);
});

//http POST localhost:4000/todolist name="fold the t-shirt" userId=2
router.post("/todolist", async (request, response, next) => {
  const { name, userId } = request.body;
  console.log(request.body);

  const newList = await Todolist.create({ name, userId });
  response.send(newList);
});

//http POST localhost:4000/todolist id=1 name="Watering plants"
router.patch("/todolist/:id", async (request, response, next) => {
  const { id } = request.params;
  const { name } = request.body;

  const theTodolist = await Todolist.findByPk(parseInt(id));

  if (!theTodolist) {
    response.status(404).send("no todolist with that id");
  } else {
    const newToDoList = theTodolist.update({ name });
    response.send(newToDoList);
  }
});

module.exports = router;
