// const express = require("express");
const db = require("../models/db");
const bcrypt = require("bcrypt");
const saltRounds = 10;
let strongRegex = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);

module.exports.getAll = (req, res) => {
  db.execute("SELECT * FROM usertable").then((data) => {
    // console.log(data);
    let [rows, cols] = data;
    // array destructuring
    // let rows = data[0]
    //let cols = data[1]
    res.status(200).json({ message: rows });
  });
};

module.exports.getUser = (req, res) => {
  let id = req.params.id;
  db.execute("SELECT * FROM usertable WHERE id = ?", [id]).then((data) => {
    let [rows] = data;
    res.status(200).json({ data: rows[0] });
  });
};

module.exports.postUser = (req, res) => {
  //   let id = req.params.id;
  let { id, name, username, email, phone, website, password } = req.body;

  if (!strongRegex.test(password)) {
    return res.status(403).send({ message: "password is not strong enough" });
  }
  password = bcrypt.hashSync(password, saltRounds);
  db.execute("SELECT * FROM usertable WHERE email = ?", [email])
    .then((data) => {
      let [rows] = data; // 1 mảng chưa 1 phần tử là mảng rỗng nếu không tìm thấy
      if (rows.length > 0) {
        res.status(404).send({ messages: "user already exit" });
      } else {
        return db.execute(
          "INSERT INTO usertable VALUES (?, ?, ?, ?, ?, ?, ?)",
          [id, name, username, email, phone, website, password]
        );
      }
    })
    .then((data) => {
      console.log(data);
      res.status(200).json({ messages: "create on successfully" });
    })
    .catch((err) => {
      //   res.status(500).json({ message: "err" });
      console.log(err);
    });
  //   db.execute("INSERT INTO usertable VALUES (?, ?, ?, ?, ?, ?, ?)", [
  //     id,
  //     name,
  //     username,
  //     email,
  //     phone,
  //     website,
  //     password,
  //   ])
  //     .then((data) => {
  //       console.log(data);
  //       res.status(200).json({ message: "oke" });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
};

module.exports.updateUser = (req, res) => {
  // let id = req.params.id
  let { id } = req.params;
  let { name, username, email, phone, website } = req.body;
  db.execute(
    "UPDATE usertable SET name =?, username =?, email =?, phone =?, website =? WHERE id = ?",
    [name, username, email, phone, website, id]
  ).then((data) => {
    console.log(data);
    res.status(200).json({ message: "update oke id" });
  });
};

module.exports.deleteUser = (req, res) => {
  let id = req.params.id;
  db.execute("DELETE FROM usertable WHERE id =?", [id])
    .then((data) => {
      console.log(data);
      res.status(200).json({ message: "delete oke id" });
    })
    .catch((error) => console.log(error));
};
