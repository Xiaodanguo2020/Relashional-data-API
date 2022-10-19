const express = require("express");
const userRoute = require("./routes/users");
const todolistRoute = require("./routes/todolist");
const app = express();

const PORT = 4000;

app.use(express.json());
app.use(userRoute);
app.use(todolistRoute);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

// const User = require("./models").user;
// const Todolist = require("./models").todolist;
// const Todoitem = require("./models").todoitems;

// app.post("/echo", (req, res) => {
//   res.json(req.body);
// });
