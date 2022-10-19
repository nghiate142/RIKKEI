const db = require("../models/db");

// module.exports.renderRegister = (req, res) => {
//   res.send("<h1>This is regitster page</h1>");
// };

// module.exports.renderLogin = (req, res) => {
//   res.send("<h1>This is regitster page</h1>");
// };
// module.exports.register = (req, res) => {
//   res.send("<h1>This is regitster page</h1>");
// };
module.exports.login = (req, res) => {
  //   let { username, password } = req.body;
  let username = req.body.username;
  let password = req.body.password;
  //   if (db.execute("SELECT * FROM usertable WHERE username = ?", [username])) {
  // console.log("aaaa");
  // if (db.execute("SELECT * FROM usertable WHERE password = ?", [password])) {
  // } else {
  //   res.status(403).json({ messages: "password is not a valid password" });
  //   console.log("bbbb");
  // }
  //   } else {
  // res.status(403).json({ messages: "username is not a valid username" });
  //     console.log("ccc");
  //   }
  //   let nameUser = db
  //     .execute("SELECT * FROM usertable WHERE username = ?", [username])
  //     .then((data) => {
  //       console.log("aaa");
  //     });

  db.query(
    "SELECT * FROM usertable WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result) {
        res.send(result);
      } else {
        res.send({ message: "Wrong username or password" });
      }
    }
  );
};
