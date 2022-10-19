const { Router } = require("express");
const express = require("express");
const User = require("../models").user;
const Todolist = require("../models").todolist;
const Todoitem = require("../models").todoitems;

const router = new Router();

const loggingMiddleware = (req, res, next) => {
  console.log("request received at" + new Date());
  res.setHeader("X-Codaisseur-Time", new Date());
  next();
};

const failRandomMiddleware = (req, res, next) => {
  const randomNumeber = Math.random();
  if (randomNumeber < 0.5) {
    res.status(401).send("Not allowed to enter");
  } else {
    next();
  }
};

// router.get(
//   "/users",
//   [loggingMiddleware, failRandomMiddleware],
//   async (request, response, next) => {
//     response.send("Hello from the server");
//   }
// );

router.get(
  "/users",
  [loggingMiddleware, failRandomMiddleware],
  async (request, response, next) => {
    const users = await User.findAll({ include: Todolist });
    console.log(users);
    response.send(users);
  }
);

router.get("/users/:id", async (request, response, next) => {
  const { id } = request.params;
  const user = await User.findByPk(id);

  if (!user) {
    response.status(404).send(`user with this ${id} is not found`);
  } else {
    response.send(user);
  }

  console.log(user);
});

router.post("/users", async (request, response, next) => {
  try {
    const { name, email, phone, password } = request.body;
    console.log(request.body);

    if (!email || email === "") {
      res.status(400).send("Must provide an email");
    } else {
      const newUser = await User.create({ name, email, phone, password });
      response.send(newUser);
    }
  } catch (e) {
    next(e);
  }
});

router.get("/todolist/:id", async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findByPk(id, {
    include: [
      {
        model: Todolist,
        include: [{ model: Todoitem, where: { important: true } }],
      },
    ],
  });

  //   const { userId } = request.params;
  //   const theList = await Todolist.findByPk(userId);

  //   console.log("this is the list", theList);

  if (!user) {
    res.status(404).send(`user with this ${id} is not found`);
  } else {
    res.send(user);
  }
});

module.exports = router;
