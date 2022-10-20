const mysql = require("mysql2");
let pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123456a@",
  database: "quanlysinhvien",
});
module.exports = pool.promise();
