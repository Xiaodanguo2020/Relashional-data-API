const { Router } = require("express");
const express = require("express");

const Todolist = require("../models").todolist;
const Todoitem = require("../models").todoitems;
const User = require("../models").user;
const Tag = require("../models").tag;

const router = new Router();

//http :4000/todoitems
router.get("/todoitems", async (req, res, next) => {
  const items = await Todoitem.findAll({ include: Tag });
  console.log(items);
  res.send(items);
});

router.get("/todoitems/:id", async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findByPk(id, {
    include: [
      {
        model: Todolist,
        include: [
          {
            model: Todoitem,
            include: [
              {
                model: Tag,
                where: { title: "Weekend" },
              },
            ],
          },
        ],
      },
    ],
  });

  if (!user) {
    res.status(404).send(`user with this ${id} is not found`);
  } else {
    res.send(user);
  }
});

module.exports = router;
