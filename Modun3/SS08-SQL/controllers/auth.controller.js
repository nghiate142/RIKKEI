const db = require("../models/db");
const bcrypt = require("bcrypt");

module.exports.renderRegister = (req, res) => {
  res.send("<h1>This is regitster page</h1>");
};

module.exports.renderLogin = (req, res) => {
  res.send("<h1>This is regitster page</h1>");
};
module.exports.register = (req, res) => {
  res.send("<h1>This is regitster page</h1>");
};
module.exports.login = (req, res) => {
  //   let { username, password } = req.body;
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

  //   db.query(
  //     "SELECT * FROM usertable WHERE username = ? AND password = ?",
  //     [username, password],
  //     (err, result) => {
  //       if (err) {
  //         res.send({ err: err });
  //       }
  //       if (result) {
  //         res.send(result);
  //       } else {
  //         res.send({ message: "Wrong username or password" });
  //       }
  //     }
  //   );

  let { email, password } = req.body;
  console.log(req.body);
  if (!email || !password) {
    return res.send({ message: "Invalid email or password" });
  }

  db.execute("SELECT * FROM usertable WHERE email = ?", [email])
    .then((data) => {
      let [rows] = data;
      let find = rows[0];
      if (!find) {
        res.send({ message: "User is not exist" });
      } else {
        let passValid = bcrypt.compareSync(password, find.password);
        if (!passValid) {
          res.status(403).send({ message: "wrong password" });
        } else {
          res.cookie("userID", find.id, { signed: true });
          res.status(200).send({ message: "ok" });
        }
      }
    })
    .catch((err) => console.log(err));
};

// authentication (xác thực)
// session (phiên đăng nhập)
// Cookie
// Token (JWT - Json web token, Bearer,...)
// Authentication with session [Cookie, JWT,...]
