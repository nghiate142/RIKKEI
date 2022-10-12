// express.js framework là gì?
// là 1 thư viện tổng hợp các câu lệnh, module được viết sẵn trên nền Node.js giúp chúng ta có thể khởi tạo một web server một cách dễ dàng hơn

// npm init khởi tạo ra package.json
// là nơi chứa thông tin về các gói thư viện được cài đặt vào trong project
// thông tin này sẽ ở dependencies và devDependencies

// C1
// chạy code server
// node + tên-file
// C2
// trong package.json, khởi tạo property "start" nằm trong phần script
// đặt cho property này một giá trị là "node app.js"
// sau đó chạy code server với câu lệnh "npm run start"
const bodyParser = require("body-parser");
const express = require("express");
const app = express(); //biến app (express()) dùng để hứng những request từ người dùng
// request:
//          GET: lấy dữ liệu
//          POST: Thêm dữ liệu
//          PUT/PATCH: Update dữ liệu
//          DELETE: Xóa dữ liệu

// fetch() javascript: Thực hiện được cả 4 request ở trên
// Form HTML: Thực hiện được GET/POST request
// Thanh URL browser: Thực hiện được GET request

const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.put("/", (req, res) => {
  res.send("Hello World!");
});
app.patch("/", (req, res) => {
  res.send("Hello World!");
});
// app.get("/about", (req, res) => {
//   res.send("Hello World!2");
// });
//app.get(url,callback) hứng GET request
//app.post(url,callback) hứng POST request
//app.put(url,callback) hứng PUT request
//app.patch(url,callback) hứng PATCH request
//app.delete(url,callback) hứng DELETE request
// toàn bộ thông tin người dùng gửi lên sẽ nằm trong req: (request) object
// chúng ta có thể response cho người dùng thông qua các phương thức nằm trong res: (request) object

// Hứng dữ liệu từ GET/DELETE request
// params request
app.get("/about/:id", (req, res) => {
  console.log(req.params);
  res.send("Hello World!2");
});

// query string
// ?key=value&key2=value2...&keyn=valuen
app.get("/user", (req, res) => {
  console.log(req.query);
  res.send("Hello World!2");
});

// Hứng dữ liệu từ POST/PUT/PATCH request
// dữ liệu được gửi từ request sẽ nằm trong phần PAYLOAD/form data trong tab network trên browser
// post request
app.post("/user", getReqBody, (req, res) => {
  //   console.log(req.body);
  res.send("Hello World!");
});

// Middleware là gì?
// Middleware là những đoạn mã trung gian nằm giữa các request và response.
// Nó nhận các request, thi hành các mệnh lệnh tương ứng trên request đó.
// Sau khi hoàn thành nó response (trả về) hoặc chuyển kết quả ủy thác cho
// một Middleware khác trong hàng đợi.

// 1.Application-level middleware (Middleware cấp ứng dụng)
// - Built-in middleware (Middleware được xây dựng sẵn)
// - Third-party middleware (Middleware của bên thứ 3 )

// việc sử dụng app.use() mỗi lần khởi tạo server chính là sử dụng các middleware cấp ứng dụng
// app.use(middleware)
// --> bodyParser.urlencoded({ extended: true })       // đây là 1 hàm, cũng như là 1 middleware

// 2. Router-level middleware (Middleware cấp điều hướng)
function getReqBody(req, res, next) {
  console.log("Bello middleware");
  console.log(req.body);
  // C1: response luôn thông qua res object
  if (req.body.name === "Vu Hoang Duc") {
    next();
  } else {
    res.send("Hello not Duc");
  }
  // C2: Chuyển qua middleware tiếp theo thông qua hàm next
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
