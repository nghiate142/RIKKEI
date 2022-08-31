
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
//   arr.length = n;
//   return arr;
//   }
//   console.log(first(arr, n));
  
//13. Cho một mảng
// const users = [
// {
// name: "Angelina Jolie",
// age: 80
// },
// {
// name: "Eric Jones",
// age: 2
// },
// {
// name: "Paris Hilton",
// age: 5
// },
// {
// name: "Kayne West",
// age: 16
// },
// {
// name: "Bob Ziroll",

// age: 100
// }
// ]

// let inputUsr = users.map(function(user){

//     return   `<h1> ${user.name} </h1>
            
//                 <h2> ${user.age}</h2>`


// });

// document.write(inputUsr);


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

// 16. Sử dụng hàm filter của array. Viết một hàm nhận vào 
//một mảng số ngẫu nhiên, hàm đó trả về 
//một mảng mới chỉ chứa các phần tử lớn hơn 5

// let array = [1,2,3,4,5,6,7,8,9,0,10,11,21];

// let filterArray = array.filter(function(arr){

//    return arr > 5;
// })

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
//Sử dụng phương thức reduce củaarray, 
//trả về object mới với các phần tử trong mảng là key,
// và value sẽ là số lần xuất hiện của chúng ở trong mảng



//17 Cho mảng sau 
// var members = [ 
//     { name: 'Lan', gender: 'female' }, 
//     { name: 'Linh', gender: 'female' }, 
//     { name: 'Trung', gender: 'male' }, 
//     { name: 'Peter', gender: 'gay' } 
//     ]; 
//    // Viết một hàm nhận đầu vào là mảng trên, 
//    //sử dụng phương thức filter của array, 
//    //trả về một mảng mới chỉ chữa những phần tử object có gender là female 
   
  
// let filterMembers = members.filter(function(member,index,array){

//    let ouput = [];
// if(member.gender==='male' || member.gender==='female'){

//    ouput.push(member.gender);

//    return ouput
  
// }
// });

// console.log(filterMembers);