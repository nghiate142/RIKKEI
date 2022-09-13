// Constructor function
// Một bảng nguyên mẫu để khai báo các instance - đối tượng con

// function Mouse(name, color) {
//     this.name = name;
//     this.color = color;
//     this.type = "Mouse";

// // 
// }

// Mouse.prototype.gamNham = function() {
//     console.log("Gặm gặm gặm");
// }


// let mickey = new Mouse("Mickey", "black-white");
// let jerry = new Mouse("Jerry", "orange-white");

// // mickey.gamNham();
// // jerry.gamNham();
// // console.log(jerry);



// // let str = "Hello World";
// let str = new String("Hello World");
// // String đã đc kế thừa các phương thức và thuộc tính của
// //constructor function String cha



// function increase3(arr, fn) {
//     let result = fn(arr);
//     return result
// }
// let newArr = increase3([1, 2, 3], function(arr) {
//     let result =[];
//     for (let i = 0; i <= arr.length - 1; i++) {
//         result.push(arr[i] + 3);
//     }
//     return result;
// })

// console.log(newArr);

// let arr = [1, 2, 3];
// arr.map(function(element) {
//     <element></element>
// })


// let result = add3AndMultiplyBy(2)(3);

// function add3AndMultiplyBy(number) {
//     number = number + 3;
//     return function(number2) {
//         return number * number2;
//     }
// }
// console.log(result);


// Dynamic là biến trong JS không bị rằng buộc bởi kiểu dữ liệu 
// mà kiểu dữ liệu phụ thuộc vào giá trị của dữ liệu


// Execution context (Ngữ cảnh thực thi)



// Khi 1 chương trình js được chạy thì nó sẽ có 2 giai đoạn
// CREATION PHASE (Giai đoạn khởi tạo)

// Setup variable environment (Khởi taooj bộ nhớ để lưu trữ các biến)

// Định nghĩa scope chain (Định nghĩa phạm vi hoạt động của biến)
    // var, let, const 
    // Global scope (var)
    // script scope (let, const)
        // debugger;
        // var a = 10;
        // let b = 20;
        // const c = 30;


// block scope (let, const)
    // if(true){
    //     debugger
    //     var a = 10;
    //     let b = 20;
    //     const c = 30;
    // }   
    // console.log(a);


// function scope (var)
    // debugger;
    // var age = 20;
    // let firstName = "Peter";
    // let lastName = "Parker";
    // const yearOfBirth = "1995";

    // // Function declaration
    // function calAge(year) {
    // return 2022 - year;
    // }

    // // Function expression
    // var getFullName = function (firstName, lastName) {
    // return `${firstName} ${lastName}`;
    // };
//VD
// debugger
//     console.log(`1. ${age}`);
// var age = 20;
// console.log(`2. ${age}`);
 
// let firstName = "Peter";
// let lastName = "Parker";
// const yearOfBirth = "1995";
 
// console.log(`3. ${calAge(yearOfBirth)}`)
// // Function declaration
// function calAge(year) {
//    return 2022 - year;
// }
// console.log(`4. ${calAge(yearOfBirth)}`)
 
// console.log(`5. ${getFullName(firstName, lastName)}`);
// // Function expression
// var getFullName = function(firstName, lastName) {
//    return `${firstName} ${lastNAme}`;s
// }
// console.log(`6. ${getFullName(firstName, lastName)}`);


//VD
//   debugger;  
// console.log(`1. ${a}`); //undefined
// var a = "Peter Parker";
// console.log(`2. ${a}`); // Peter
 
// printa();
 
// function printa() {
//  console.log(`3. ${a}`); // Peter
//  var a = "Tony Stark";
//  console.log(`4. ${a}`); //Tony
// }
// console.log(`5. ${a}`); //Perter

// VD

var x = 10;
 
one();
function one() {
   var y = 5;
   two();
 
   function two() {
       var z = 15;
       three();
 
       function three(){
           var t = x + y + z;
           console.log(`1. x + y + z = ${t}`);
           four()
       }
   }
}
 
function four() {
   var t = 30;
   console.log(`2. x = ${x}`);
//    console.log(`3. y = ${y}`);
//    console.log(`4. z = ${z}`);
   console.log(`5. t = ${t}`);
}


// Rằng buộc từ khoá this


// EXECUTION PHASE (Giai đoạn thực thi)



