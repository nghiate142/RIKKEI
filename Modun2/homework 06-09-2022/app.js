// /** @format */
// //Cau1:
// (IIFE = () => {
//   let foo = (x) => {
//     var y = x * 2;

//     return function bar(z) {
//       if (z.length > 3) {
//         return z.map(
//           (baz = (v) => {
//             if (v > 3) return v + y;
//             else return baz(v * 4);
//           })
//         );
//       } else {
//         var obj = [];
//         setTimeout(
//           function bam() {
//             obj.length = 1;
//             obj[0] = this.w;
//           }.bind(this),
//           100
//         );
//         return obj;
//       }
//     };
//   };

//   var p = foo(2);
//   var list1 = [1, 3, 4];
//   var list2 = list1.concat(6);
//   list1 = p.call({ w: 42 }, list1);
//   list2 = p(list2);
//   setTimeout(() => {
//     console.log(
//       list1[0] ===
//         list2.reduce((s, v) => {
//           return s + v;
//         }, 0)
//     );
//   }, 200);
// })();

//Cau2:
// var x = 2;
// let fns = [];
// (() => {
//   let x = 5;

//   for (let i = 0; i < x; i++) {
//     fns[i] = () => i;
//   }
//   return fns;
// })();
// console.log(x * 2 === fns[x * 2]());

//Cau3:
// function foo() {
//   var a1 = [2, 4];
//   var a2 = [6, 8, 10, 12];
//   var result = [...a1, ...a2];
//   result.splice(1, 2);
//   return foo(result);
// }
// function bar() {
//   return foo();
// }
// // DO NOT MODIFY BELOW CODE
// console.log(bar().join("") === "281012");

//cau4:

// function ajax(url, cb) {
//   // fake ajax response:
//   cb({
//     foo: 2,
//     baz: [6, 8, 10],
//     bam: {
//       qux: 12,
//     },
//   });
// }

// function check(data) {
//   console.log(
//     56 ===
//       data.foo +
//         data.bar +
//         data.baz[0] +
//         data.baz[1] +
//         data.baz[2] +
//         data.bam.qux +
//         data.bam.qam
//   );
// }

// var defaults = {
//   foo: 0,
//   bar: 4,
//   bam: {
//     qux: 0,
//     qam: 14,
//   },
// };

// // YOUR CODE HERE
// function response(data) {
//   // xây data gồm các trường giống trong phần console.log(56 === data...);
//   // Sử dụng spread operator(...)
//   let newData = {
//     ...data,
//     ...defaults,
//     foo: 2,
//     bam: {
//       qam: 14,
//       qux: 12,
//     },
//   };
//   console.log(newData);
//   check(newData); // true
// }

// // DO NOT MODIFY
// ajax("http://fun.tld", response);

//cau 5:
function upper(strings, ...values) {
  const str0 = strings[0];
  const str1 = strings[1];
  const str2 = strings[2];
  const str3 = strings[3];

  const arr = [...values];

  //We can even return a string build using a template literal
  return `${str0}${arr[0]}${str1}${arr[1]}${str2}${arr[2]}${str3}`;
}
var name = "Nguyen Van A",
  account = "ANV",
  classname = "Fresher FrontEnd";

console.log(
  upper`Hello ${name.toUpperCase()} (@${account}), welcome to the ${classname.toUpperCase()}!!!` ===
    "Hello NGUYEN VAN A (@ANV), welcome to the FRESHER FRONTEND!!!"
);
