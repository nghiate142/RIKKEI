// console.log('hello Word');
// let a = 10;
// let b = 50
// console.log(a+b);

// 1. NodeJS - RUNTIME (Môi trường)
// Giúp cho code Javascript có thể chạy ngoài môi trường
// Trình duyệt

// 2. Client - Server
// Website là một tập hợp các file chứa thông tin bao gồm văn bản, hình ảnh, video, âm thanh được đặt trong một máy chủ. 
// Máy chủ cho phép các máy tính của người dùng (máy khách) yêu cầu  truy cập đến các file này thông qua trình duyệt 
// Giao thức HTTP được sử dụng để thiết lập kết nối từ trình duyệt đến máy chủ và trả về các file tương ứng cho trình duyệt theo yêu cầu của người dùng 
// Trình duyệt tiếp nhận file trả về từ máy chủ và tuỳ theo loại file sẽ có cách xử lý khác nhau như hiển thị nội dung file, 
// download file về máy tính người dùng …

// 3. Static website vs Dynamic website
// Static website - HTML, CSS, JS tĩnh với nội dung thuần túy không thay đổi
// Mỗi khi cần thay đổi phải thao tác trực tiếp chỉnh sửa các file HTML, CSS, JS
// Dynamic website khi có sự tham gia của DB và các đoạn mã logic của ngôn ngữ lập trình phía sau server --> được gọi là website động

// 4. JS là ngôn ngữ?
// Là ngôn ngữ chạy trên trình duyệt phía client 
// Nhờ node.js nên js có thể chạy trên server

// repl - read - evaluate - print - loop

// 5. Modunle
// Node.js là cấu tạo của rất nhiều built-in modunle kết hợp lại với nhau

// require()

const fs = require('node:fs');
const all = require("everyday-fun")

console.log(all.getRandomQuote());

// Readfilesync()
// let reuslt = fs.readFileSync("./demo.txt")
// console.log(reuslt.toString());

// writeFileSync()
// fs.writeFileSync("./demo.txt", reuslt + " alo alo ")

// path intellisense, node module interllisense, intellicode

// 6. npm - node package management (trình quản lý các gói thư viện của node.js)
// Khi cài đặt node.js, npm sẽ được tích hợp vào terminal để có thể quản lý các packages (gói) được cài vào trong source code

// npm -version

// trước khi cài các package từ internet 
// npm init -> khởi tạo 1 file pakage.json
// package.json dùng để lưu trữ thông tin về các package đã cài
// thông tin đó nằm ở trong trường dependencies hoặc devDependencies

// npm i [tên-package]: cài đặt thư viện
// 

// khi xía node_modules
// có thể cài lại toàn bộ thư viện đã đc lưu lại thông tin trong deendencies bằng lệnh: npm i