// function declaration (Khai bao function)
// function myFunction(a) {
//   return a;
// }

// function expression (khai bao function theo dang bieu thuc)
// bieu thuc function
// let myFunction2 = function (b) {
//   return b;
// };

// // arrow function (Ham mui ten)
// const myFunction3 = (c) => {
//   return c;
// };
// const myFunction4 = (a, b) => a + b;

// const myFunction5 = (d) => d + 1;

// function expression (thuc thi function)
// console.log(myFunction("Hello world"));
// myFunction2("Hello world 2");
// console.log(myFunction3("Hello world 3"));

// arrow function là 1 biểu thức hàm (đc khai báo thông qua từ khoá let, const,var)
// => scope - phạm vi hoạt động của arrow function sẽ đc quyết định bởi từ khoá khai báo

// var: thì arrow function tại giai đoạn khởi tạo (creation phase)
// sẽ có giá trị undefined
// => Khi thực thi arrow function trước khi khai báo thì sẽ báo lỗi [tên function] không phải là 1 function

// let/const: đây là 2 từ khoá khai báo biến trong es6
// chúng luôn có 1 vùng chết tạm thời trước khi khai báo temporal dead zone (TDZ)
// => khi thực thi arrow function trước khi khai báo thi sẽ lỗi không thể truy
// cập biến trước khi khai báo bằng từ khoá (let/const) trước khi khởi tạo

// constructor function
function Mouse(color, name) {
  console.log(this);
  this.name = name;
  this.color = color;
  this.tyoe = "Mouse";
}

// khởi tạo instance từ constructor function

let mickey = new Mouse("black", "Mickey Mouse");
let jerry = new Mouse("yellow", "Jerry Mouse");

console.log(mickey);
console.log(jerry);

function cal(a, b) {
  console.log(this);
  return a + b;
}
console.log(cal(1, 2));

let person = {
  name: "Gam",
  age: 18,
  hello: function () {
    console.log(this.name + " Hello");
  },
};
person.hello();
