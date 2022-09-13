//6

// a= 2;//undefine
// var a;//undefine
// console.log(a);//2

//7
// console.log(a);//undefine

// var a = 2;//2
//8

// var a = 10;//10
// function foo() {
//     var a;//undefine
//     console.log( a );//undefine
//     a = 2;
//     }
//     foo();

//9

// foo();
// var foo();//err
// // function foo() {
// // console.log(1);//1
// // }
// foo = function() {
// console.log(2);
// }//err foo chua duoc goi

//10. Không chạy đoạn code sau,
//phán đoán output của các câu lệnh console.log() var foo();
// function foo() {
//     console.log(1);
//     }//chua duoc thuc thi
//     foo = function() {
//     console.log(2);//2
//     }

//     foo();

//11 Viết 1 chương trình xóa đi n phần tử cuối cùng của 1 array
// let arr = ['1', '2', '3', '4', '5'];
// let n = prompt()
// function removeEnd(arr, n) {
//     let lengthNewArr = arr.length - n;
//     arr.length = lengthNewArr
//     return arr
// }
// console.log(removeEnd(arr, n));

// 12
// let arr = ['1', '2', '3', '4', '5'];
// let n = prompt();
// function first(arr, n) {
// //   arr.length = n;
// //   return arr;
// C2
// return arr.splice(n, arr.length - n);
//   }
//   console.log(first(arr, n));

//13. Cho một mảng
const users = [
  {
    name: "Angelina Jolie",
    age: 80,
  },
  {
    name: "Eric Jones",
    age: 2,
  },
  {
    name: "Paris Hilton",
    age: 5,
  },
  {
    name: "Kayne West",
    age: 16,
  },
  {
    name: "Bob Ziroll",

    age: 100,
  },
];

// let inputUsr = users.map(function(user){

//     return   `<h1> ${user.name} </h1>

//                 <h2> ${user.age}</h2>`

// });

// document.write(inputUsr);
// C2
// let result = users.map(function(e,i){
//     e.name = `<h1>${e.name}</h1>`,
//     e.age = `<h2>${e.age}</h2>`
//     return e
// })
// console.log(result);

// 14 let usrInput = users.map(function(user){

// return user.name;

// })

// console.log(usrInput);

// 15. - Viết một hàm triple() trả về một số đã được nhân 3
//Sử dụng phương thức map của array, viết hàm multiply() nhận vào một mảng và
//trả về mảng mới với các số đã được nhân 3. Sử dụng hàm triple để nhân 3 các
//số đó. 16. Sử dụng hàm filter

// function triple(number) {
//     return number * 3;
// }
// let n = prompt('nhap')
// let array = [1,2,3,4,5,6,7,8,9,0,10,11,21];
// let newArr = array.map(function multiply(num) {
//     return (num * 3) * triple(n);
// })
// console.log(newArr);
// C2
// function triple(num){
//     return num * 3
// }
// function multiply(arr){
//     return arr.map(triple)
// }
// console.log([1,2,3,4,5,6]);

// 16. Sử dụng hàm filter của array. Viết một hàm nhận vào
//một mảng số ngẫu nhiên, hàm đó trả về
//một mảng mới chỉ chứa các phần tử lớn hơn 5

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10, 11, 21];

// let filterArray = array.filter(function (arr) {
//   return arr > 5;
// });

// console.log(filterArray);
//21 Viết một hàm nhận vào một mảng 2 chiều,
// sử dụng phương thức reduce và trả về một mảng một chiều chứa toàn bộ
// những phần tử con trong các mảng con

//reduce tra ve 1 gia tri duy nhat

// let  flatternArr = [

//     ['a','b','c'],

//     ['b','a']
// ]

//array tuong trung cho mang flatt
// index tuong trung cho cac phan tu trong mang
// let arr = flatternArr.reduce(function(array,index){

//    return array.concat(index);

// }, [])
// console.log(arr)

//20 Viết một hàm nhận vào một mảng ngẫu nhiên.
//Sử dụng phương thức reduce của array,
//trả về object mới với các phần tử trong mảng là key,
// và value sẽ là số lần xuất hiện của chúng ở trong mảng
// C1
// let arr = ["a", "b", "c", "b", "a", "a"];
// let result = {};
// for (let i = 0; i < arr.length; i++) {
//   let element = arr[i];
//   if (!result[element]) {
//     result[element] = 1;
//   } else {
//     result[element] = result[element] + 1;
//   }
// }
// console.log(result);
// C2
// let arr = ["a", "b", "c", "b", "a", "a"];
// let arrNew = arr.reduce(function (pre, cur) {
//   //   console.log(pre, cur);
//   if (!pre[cur]) {
//     pre[cur] = 1;
//   } else {
//     pre[cur] = pre[cur] + 1;
//   }
//   return pre;
// }, {});
// console.log(arrNew);

//17 Cho mảng sau
// var members = [
//   { name: "Lan", gender: "female" },
//   { name: "Linh", gender: "female" },
//   { name: "Trung", gender: "male" },
//   { name: "Peter", gender: "gay" },
// ];
//    // Viết một hàm nhận đầu vào là mảng trên,
//    //sử dụng phương thức filter của array,
//    //trả về một mảng mới chỉ chữa những phần tử object có gender là female

// let filterMembers = members.filter(function (member, index, array) {
//   let ouput = [];
//   if (member.gender === "male" || member.gender === "female") {
//     ouput.push(member.gender);

//     return ouput;
//   }
// });
// console.log(filterMembers);

// C2
// function filterMember(arr) {
//   return arr.filter(function (e, i) {
//     return e.gender === "female";
//   });
// }
// console.log(filterMember(members));

//18 Viết một hàm nhận vào một mảng số tự nhiên,
// sử dụng find method của array trả về số chẵn đầu tiên của mảng đó,
// nếu không tìm thấy trả về undefined
//
// let number = prompt('').split('');
// const find = number.find(function(number){
//     return number % 2 === 0;
// })
// console.log(find);

//19 Viết một hàm nhận vào 2 tham số, tham số đầu tiên là một mảng số tự nhiên,
// tham số thứ 2 là số cần chia hết. Sử dụng find method của array,
// trả về số đầu tiên trong mảng đầu vào chia hết cho tham số thứ 2.
// Nếu không tìm thấy trả về undefined

// const array = prompt().split("");
// let x = parseInt(prompt());
// console.log(array);
// let result = array.find(function findDivisibleNum(array, x) {
//   return array % x === 0;
// });
// console.log(result);

//21 Viết một hàm nhận vào một mảng 2 chiều, sử dụng phương thức reduce và
// trả về một mảng một chiều chứa toàn bộ những phần tử con trong các mảng con

// function flatternArray(arr) {
//   return arr.reduce(function (pre, cur) {
//     for (let i = 0; i <= cur.length - 1; i = i + 1) {
//       pre.push(cur[i]);
//     }
//     return pre;
//   }, []);
// }

// let result = flatternArray([
//   [1, 2, 3],
//   [4, 5],
// ]);
// console.log(result);
// C2
// function flatternArray(arr) {
//   return arr.reduce(function (pre, cur) {
//     return pre.concat(cur);
//   });
// }

// let result = flatternArray([
//   [1, 2, 3],
//   [4, 5],
// ]);
// console.log(result);
// C3
// function flatternArray(arr) {
//   return arr.reduce(function (pre, cur) {
//     return [...pre, ...cur]; // spread operator (array, object)
//   });
// }

// let result = flatternArray([
//   [1, 2, 3],
//   [4, 5],
// ]);
// console.log(result);

//22 Viết một hàm nhận vào một mảng số gồm 2 số.
// Tính tổng của các số tự nhiên trong khoảng 2 số đó

// function sum(arr) {
//   let result = 0;
//   if (arr[0] < arr[1]) {
//     for (let i = arr[0]; i <= arr[1]; i++) {
//       result = result + i;
//     }
//   } else {
//     for (let i = arr[1]; i <= arr[0]; i++) {
//       result = result + i;
//     }
//   }
//   return result;
// }
// console.log(sum([1, 4]));

//23 Viết một hàm nhận vào 2 mảng số,
// so sánh 2 mảng và trả về một mảng mới chứa các phần tử độc nhất giữa 2 mảng.
// Chú ý sử dụng hàm filter

// function diff(arr1, arr2) {
//   let result1 = arr1.filter(function (e, i) {
//     return arr2.indexOf(e) === -1;
//   });
//   let result2 = arr2.filter(function (e, i) {
//     return arr1.indexOf(e) === -1;
//   });
//   return result1.concat(result2);
// }
// let results = diff([1, 2, 3, 4], [1, 4, 5, 6]);
// console.log(results);

//24 Viết một hàm nhận vào 1 số n, tính tổng các số lẻ của dãy fibonacci nhỏ hơn số n
// Lưu ý: Dãy fibonacci bắt đầu từ 1 (1, 1, 2, 3, 5, 8….)
// function sumFib(n) {
//   let num1 = 1;
//   let num2 = 1;
//   let temp;
//   let result = [];
//   for (let i = 1; i <= n; i++) {
//     if (num1 <= n) {
//       result.push(num1);
//     }
//     temp = num1;
//     num1 = num2;
//     num2 = temp + num2;
//   }
//   let sum = 0;
//   for (let e of result) {
//     if (e % 2 == 1) {
//       sum = sum + e;
//     }
//   }
//   return sum;
// }
// let result = sumFib(99999999999999);
// console.log(result);

//26 Viết một hàm nhận vào 2 hoặc nhiều mảng,
// trả về một mảng mới chứa các phần tử không trùng lặp trong các mảng truyền vào
function flatternArr(arr) {
  return arr.reduce(function (pre, cur) {
    return [...pre, ...cur];
  });
}
function uniqueArray() {
  let result = [];
  for (let i = 0; i <= arguments.length - 1; i++) {
    result.push(arguments[i]);
  }
  result = flatternArr(result);
  return result.filter(function (e, i) {
    return result.indexOf(e) === i;
  });
  console.log(result);
}
let result = uniqueArray(
  [1, 2, 3, 4, 5],
  [1, 5, 4, 4, 63, 45],
  [1, 4, 5, 6, 2, 6, 7, 4, 75]
);
console.log(result);
