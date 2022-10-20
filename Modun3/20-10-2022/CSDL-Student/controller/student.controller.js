const db = require("../models/db");
const bcrypt = require("bcrypt");

module.exports.getAll = (req, res) => {
  db.execute("SELECT * FROM student").then((data) => {
    console.log("aaaa");

    let [rows, cols] = data;
    res.status(200).json({ message: rows });
  });
};
