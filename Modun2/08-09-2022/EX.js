// 1
// setTimeout(() => {
//   console.log("Hello Rikkei Academy");
// }, 2000);

// setInterval(() => {
//   console.log("Hello");
// }, 2500);

// Sử dụng setInterval để log Hello Rikkei Academy lặp đi lặp lại sau mỗi 3s.

// 2
// const now = new Date().getTime();
// let interval = setInterval(function () {
//   if (new Date().getTime() - now > 10000) {
//     clearInterval(interval);
//     return;
//   }
//   console.log("Hello Rikkei Academy");
// }, 3000);

// 3
// (function () {
//   console.log(1);
//   setTimeout(function () {
//     console.log(2);
//   }, 1000);
//   setTimeout(function () {
//     console.log(3);
//   }, 0);
//   console.log(4);
// })();
// // => 1,4,3,2

// 4.1
// console.log("A");
// setTimeout(function () {
//   console.log("B");
// }, 0);
// setTimeout(function () {
//   console.log("C");
// }, 0);
// console.log("D");
// // A D B C

// 4.2
// setTimeout(function () {
//   setTimeout(function () {
//     console.log("A");
//   }, 0);
// }, 0);
// setTimeout(function () {
//   console.log("B");
// }, 0);
// setTimeout(function () {
//   setTimeout(function () {
//     console.log("C");
//   }, 0);
// }, 10);

// setTimeout(function () {
//   console.log("D");
// }, 0);
//B D A C

// 4.3
// var x = "A";
// setTimeout(function () {
//   console.log(x);
//   x = "B";
// }, 1000);
// setTimeout(function () {
//   console.log(x);
//   x = "C";
// }, 2000);
// setTimeout(function () {
//   console.log(x);
//   x = "D";
// }, 1000);
// setTimeout(function () {
//   console.log(x);
// }, 4000);
// //

// 4.4
// var t1 = setTimeout(function () {
//   console.log("A");
//   setTimeout(function () {
//     console.log("B");
//   }, 0);
// }, 100);

// var t2 = setTimeout(function () {
//   console.log("C");
//   setTimeout(function () {
//     console.log("D");
//   }, 0);
// }, 200);

// clearTimeout(t1);

// setTimeout(function () {
//   clearTimeout(t2);
// }, 250);
// C D

// 5.1

// 5.2
// function alogA() {
//   setTimeout(function () {
//     console.log("A");
//   }, 0);
//   function alogB() {
//     setTimeout(function () {
//       console.log("B");
//     }, 0);
//   }
// }
// function alogC() {
//   setTimeout(function () {
//     console.log("C");
//   }, 0);
// }

// function alogD() {
//   setTimeout(function () {
//     console.log("D");
//   }, 0);
// }

// alogD(alogA(alogB(alogC())));

// 6
// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }

// for (var i = 0; i < 5; i++) {
//   (function (index) {
//     setTimeout(function () {
//       console.log(index);
//     }, 0);
//   })(i);
// }

// function delay(index) {
//   setTimeout(function () {
//     console.log(index);
//   }, 0);
// }
// for (let i = 0; i < 5; i++) {
//   delay(i);
// }

//7

// Nhiệm vụ chính của Promise constructor function là để bọc lấy những
// hàm bất đồng bộ và cung cấp cho chúng tính năng của promise như:
// .then()
// .catch()
// function Promise_all(promises) {
//   return new Promise((resolve, reject) => {
//     if (promises.length === 0) {
//       resolve([]);
//     } else {
//       let result = [];
//       let countSuccess = 0;

//       for (i = 0; i <= promises.length - 1; i++) {
//         promises[i].then((res) => {
//           countSuccess++;
//           result[i] = res;
//           if (countSuccess === promises.length) {
//             console.log(result);
//             resolve(result);
//           }
//         });
//       }
//     }
//     // Your code here.
//   });
// }
// // Test code.
// Promise_all([]).then((array) => {
//   console.log("This should be []:", array);
// });
// function soon(val) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(val), Math.random() * 500);
//   });
// }
// Promise_all([soon(1), soon(2), soon(3)]).then((array) => {
//   console.log("This should be [1, 2, 3]:", array);
// });
// Promise_all([soon(1), Promise.reject("X"), soon(3)])
//   .then((array) => {
//     console.log("We should not get here");
//   })
//   .catch((error) => {
//     if (error != "X") {
//       console.log("Unexpected failure:", error);
//     }
//   });

// New
function Promise_all(promises) {
  return new Promise((resolve, reject) => {
    // Your code here.
    if (promises.length === 0) {
      resolve([]);
    } else {
      let result = [];
      let countSuccess = 0;
      for (let i = 0; i <= promises.length - 1; i++) {
        promises[i]
          .then((res) => {
            countSuccess++;
            result[i] = res;
            if (countSuccess === promises.length) {
              resolve(result);
            }
          })
          .catch((err) => reject("Unexpected error"));
      }
    }
  });
}

// Test code.
Promise_all([]).then((array) => {
  console.log("This should be []:", array);
});

function soon(val) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(val), Math.random() * 500);
  });
}

Promise_all([soon(1), soon(2), soon(3)]).then((array) => {
  console.log("This should be [1, 2, 3]:", array);
});

Promise_all([soon(1), Promise.reject("X"), soon(3)])
  .then((array) => {
    console.log("We should not get here");
  })
  .catch((error) => {
    if (error != "X") {
      console.log("Unexpected failure:", error);
    }
  });

// API
// function getData(url, fn) {
//   var xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState == XMLHttpRequest.DONE) {
//       if (xhr.status === 200) {
//         fn(undefined, JSON.parse(xhr.responseText));
//       } else {
//         fn(new Error(xhr.statusText), undefined);
//       }
//     }
//   };
//   xhr.open("GET", url, true);
//   xhr.send();
// }
// getData("https://api.github.com/users", (err, res) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// });

// Callback hell: Xảy ra khi có quá nhiều callback function lồng nhau
// --> khó maintain code, debug code

// let pro = new Promise((resolve, reject) => {
//   getData("https://jsonplaceholder.typicode.com/todos", (err, res) => {
//     if (err) {
//       reject(err);
//     } else {
//       resolve(res);
//     }
//   });
// });

// pro.then((res) => console.log(res)).catch((err) => console.log(err));
