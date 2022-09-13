// Asynchronous Programing (Bất đồng bộ)
// Concurrency vs parralel
//(Đồng thời) vs (Song song)
// Đồng thời là khi hai hay nhiều tác vụ có thể bắt đầu xử lý, đang xử lý và hoàn tất trong khoảng thời gian
// chồng chéo lên nhau (overlapping time)
// Song song: là khi 2 hay nhiều tác vụ có thể bắt đầu xử lý, đang xử lý và hoàn toàn tất trong chính xác
// cùng 1 thời điểm

// single thread/blocking
// Đơn luồn: chỉ có 1 luồng để xử lý code => khi gặp tác vụ mất time, code sẽ bị đóng băng
// => xảy ra hiện tượng blocking
// => Js sinh ra những công cụ hỗ trợ cho việc xử lý vấn đề blocking

//VD
// console.log("Hello 1");
// const start = new Date().getTime(); // Lấy thời gian hiện tại (milisecond). 1s = 1000ms
// while (true) {
//   let end = new Date().getTime(); // Lấy ra thời gian hiện tại
//   if (end - start >= 10000) {
//     console.log("end loop");
//     break;
//   }
// }
// setTimeout(() => {
//   console.log("end loop");
// }, 10000);
// console.log("Hello 2");

//VD2
// console.log("hello Rikkei");
// function logHelloWorld() {
//   console.log("Hello world2");
// }
// setTimeout(logHelloWorld, 1000);
// function block3Seconds() {
//   const start = new Date().getTime();

//   while (true) {
//     const end = new Date().getTime();
//     if (end - start > 3000) {
//       console.log("end loop");
//       break;
//     }
//   }
// }
// block3Seconds();
// console.log("Heelo JS");

// function fakeGetData(url, callbackFn) {
//   var fakeResponses = {
//     "https://rikkei.com/api/1": "Data1",
//     "https://rikkei.com/api/2": "Data2",
//     "https://rikkei.com/api/3": "Data3",
//   };
//   var randomMiliseconds = Math.floor(Math.random() * 5000) + 1000;

//   console.log(
//     `Đang gọi API với URL : ${url} - Thời gian ${randomMiliseconds}ms`
//   );

//   setTimeout(function () {
//     callbackFn(fakeResponses[url]);
//   }, randomMiliseconds);
// }
/**
 * Yêu cầu Challenge 01:
 *  1. Các lời gọi API sẽ có thời gian chạy khác nhau và ngâu nhiên
 *  2. Kết quả phải được hiển thị ra cho người dùng theo đúng thứ tự 1 -> 2 -> 3
 */

// fakeGetData("https://rikkei.com/api/1", function (data1) {
//   fakeGetData("https://rikkei.com/api/2", function (data2) {
//     fakeGetData("https://rikkei.com/api/3", function (data3) {
//       console.log("Data1", data1);
//       console.log("Data2", data2);
//       console.log("Data3", data3);
//     });
//   });
// });

// Closure

// let result = fetch("https://api.github.com/users", (res) => {
//   return res;
// });
//brower -> gửi request đến url(end point)
//JS engine sẽ khởi tạo ra 1 promise để hứng kết quả trả về (response) từ brower
// Promise là một Obiect đặc biệt được xây dựng sẵn (built-in) trong JS được sử dụng cho việc xử lý
// những tác vụ bất đồng bộ. bên trong Object này sẽ chứa kết quả trả về (Thành công hoặc thất bại)
// của một tác vụ bất đồng bộ thông qua
// console.log(result);
// console.log("1. Hello Rikkei"); // 0ms

// // 0ms
// setTimeout(() => {
//   console.log("?. Hello setTimeout");
// }, 0);

// // 1000ms
// fetch("https://api.github.com/users")
//   .then((response) => {
//     console.log("?. Hello response", response);
//   })
//   .catch((error) => {
//     console.log("?. Hello error", error);
//   });

// block5Seconds();
// function block5Seconds() {
//   const start = new Date().getTime();
//   while (true) {
//     const end = new Date().getTime();

//     if (end - start >= 5000) {
//       break;
//     }
//   }
//   console.log("2. block5Seconds done");
// }

// console.log("3. Hello Javascript");
