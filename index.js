const { response } = require("express");
const express = require("express");
const app = express();
const PORT = 4000;

const User = require("./models").user;
const Todolist = require("./models").todolist;
const Todoitem = require("./models").todoitems;

app.use(express.json());

app.get("/", async (request, response, next) => {
  response.send("Hello from the server");
});

app.get("/users", async (request, response, next) => {
  const users = await User.findAll({ include: Todolist });
  console.log(users);
  response.send(users);
});

app.get("/todolist", async (request, response, next) => {
  const todolist = await Todolist.findAll();
  console.log("this is my todolist", todolist);
  response.send(todolist);
});

app.get("/users/:id", async (request, response, next) => {
  const { id } = request.params;
  const user = await User.findByPk(id);

  if (!user) {
    response.status(404).send(`user with this ${id} is not found`);
  } else {
    response.send(user);
  }

  console.log(user);
});

//http POST localhost:4000/todolist name="fold the t-shirt" userId=2
app.post("/todolist", async (request, response, next) => {
  const { name, userId } = request.body;
  console.log(request.body);

  const newList = await Todolist.create({ name, userId });
  response.send(newList);
});

app.post("/echo", (req, res) => {
  res.json(req.body);
});

app.post("/users", async (request, response, next) => {
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

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
