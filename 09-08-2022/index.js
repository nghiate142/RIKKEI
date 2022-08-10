// function processConfirm(answer){
//     let result = "";
//     if (answer){
//         result = "Excellent. We'll play a nice game of chess";

//     } else {
//         result = "Maybe later then";
//     }

//     return result;
// }

// let confirmAnswer = confirm("Shall we play a game");
// let theAnswer = processConfirm(confirmAnswer);
// alert(theAnswer);
// processConfirm(true)
// console.log(processConfirm(false));

// EX1: Nhập từ người dùng xong check chẵn lẻ
// let input = Number(prompt('Nhập số bất kỳ'));
// function check(a){
//     if (a % 2 === 0) {
//         alert('Số chẵn');
//     } else {
//         alert('số lẻ');
//     }
//     return a;
// }
// console.log(check(input))

//EX2: tìm số nguyên tố
// let a = prompt('Nhập vào 1 số bất kỳ');
// console.log(typeof(a));
// function check(a) {
//     if (a < 2) {
//         alert('Không phải số nguyên tố');
//         return;
//     }else if(a == 2) {
//         alert('là số nguyên tố')

//     }
//     for (i = 2; i < a; i++) {
//         if (a % i === 0) {
//             alert('không phải số nguyên tố');
//             break;
//         }
//         else {
//             alert('là số nguyên tố')
//             break;
//         }
//     }
// }

// let result =check(a);
// console.log(result);



//EX3: Viết hàm nhận vào 3 số nguyên bất kỳ, trả về số nguyên có giá trị nhỏ nhất.
// let a = Number(prompt('Nhập số thứ 1'));
// let b = Number(prompt('Nhập số thứ 2'));
// let c = Number(prompt('Nhập số thứ 3'));
// function check(a,b,c){
//     if (a < b && a < c){
//         alert(a, ' là số nhỏ nhất');
//     } 
//     else if (b < a && b < c) {
//         alert(b, ' là số nhỏ nhất');
//     }
//     else {
//         alert(c, ' là số nhỏ nhất')
//     }
// }
// console.log(check(a,b,c));

//EX4: Viết hàm truyền vào một mảng ký tự, và một ký tự bất kỳ, kiểm tra xem ký tự bất kỳ đó có nằm trong mảng không. 
// Nếu có trả về số lần xuất hiện của ký tự đó, nếu không trả về -1

// function check(){
//     let array = prompt('nhập bất cứ cái gì').split('');
//     let userInput = prompt('nhập ký tự cần kiểm tra');
//     let a = 0;
//     for (i = 0; i < array.length; i++){
//         if (array[i] == userInput){
//             a = a + 1
//         }
//     }
//     if(a > 0){
//         alert(`có ${a} lần xuất hiện`)
//     } else {
//         return -1;
//     }
// }
// console.log(check());

// var x = 5; 
// if(x++ < 6) {
//       x++;
// } 
// document.write(x);