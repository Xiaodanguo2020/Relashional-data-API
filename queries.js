const User = require("./models").user;
const Todoitem = require("./models").todoitems;
const { Op } = require("sequelize");

// async function getAllUsers() {
//   const allUsers = await User.findAll({ raw: true });
//   console.log("all users", allUsers);
//   return allUsers;
// }

// getAllUsers().then((users) => console.log(users.map((user) => user.name)));

/// when recieved an request,
// search database for users
// send the users back as a response

/*const app = express()
app.get("/users", (req, res) => {
    const users = await getAllUsers()
    res.send(users)
})*/

// async function getSpecificUser(userName) {
//   const oneUser = await User.findOne({ where: { name: userName }, raw: true });
//   console.log("this one user is", oneUser);
//   return oneUser;
// }

// getSpecificUser("Leo Messi").then((users) =>
//   console.log("now we got it outsie", users)
// );

// async function getItemBypk(id) {
//   const itembyPk = await Todoitem.findByPk(id);
//   await itembyPk.update({ important: false });

//   console.log("this is the item", itembyPk);
// }

// getItemBypk(1);

//pagination

async function getPagination() {
  try {
    const pageofItems = await Todoitem.findAndCountAll({
      where: {
        task: {
          [Op.like]: "Put%",
        },
      },
      offset: 1,
      limit: 4,
    });
    console.log("this is all relevant item", pageofItems);
    console.log("how many relevant items there are", pageofItems.count);
    console.log("result due to pagination", pageofItems.rows);
    console.log(pageofItems.rows.length);
  } catch (e) {
    console.error(e);
  }
}

getPagination();
