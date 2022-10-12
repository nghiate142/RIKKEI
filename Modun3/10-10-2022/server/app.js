const express = require("express");
const app = express();
// Serving static files in Express
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
// Routing - Điều hướng client
// GTE/POST/PUT-PATCH/DELETE

const port = 3000;

// Get request
app.get("/", (req, res) => {
  // req - request (chứa toàn bộ thông tin cient gửi đến)

  // res - response (chứa toàn bộ các phương thức gửi về cho client)
  // res.end() --> trả về text, html
  // res.json() --> json data
  // res.sendFile("url")

  res.status(200).sendFile(`${__dirname}/public/index.html`);
});

// Express là thư viện build trên nền node.js có thể chạy JS ở môi trường server

// 2 công dụng chính
//
// 1. build các website dạng server-side sang rendering
// server sẽ sinh ra code HTML, CSS, JavaScript để browser có thể hiện thị những nội dung này
// sử dụng template engine (ejs, pug, handlebars,..)

// 2. Build các website dạng client-side rendering

// Dạng 1
// Server sẽ trả về data dạng json cho phía client (browser)
// -- Sẽ có 1 thư viện fontend bên thứ 3 (reactJS, VuaJS, AngularJS)
// -- routing ở client và render ra dữ liệu

// Dạng 2
// Server trả về các file HTML, CSS, JavaScript tĩnh
// -- Server cũng trả về dữ liệu dạng json
// -- các file JS tĩnh sẽ có nhiệm vụ fetch dữ liệu từ server và render ra HTMl

// Listen server on switch port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Chạy server bị trùng port
// B1: kiểm tra port in use (port đang chạy)

// B2: Sau khi check xong -> Tìm id của port đang chạy

// B3: Kill port đó với id vừa tìm thấy
