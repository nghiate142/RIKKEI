// Bài 1: Viết chương trình cộng hai số (Sử dụng Return)
//code
// let a = parseInt(prompt('Nhập số thứ nhất'));
// let b = parseInt(prompt('Nhập số thứ 2'));
//     function tong(a){

//         return a + b;
//     }
//     console.log(tong(a));

// Bài 2: Tính tổng các số lẻ trong mảng. (Sử dụng Return)
//code
// let array = [1, 2, 3, 4, 5, 6];
// let tong = 0;
// // console.log(array.length)
// function abc(array){
//     for (i = 0; i < array.length; i++){
//         if(array[i] % 2 == 1){
//             tong = tong + array[i];  
//         }
//     }
//     return console.log(tong);
// }
// abc(array)


// Bài 3: Tạo hàm nhận vào hai tham số. Nếu giá trị của tham số thứ nhất lớn hơn
// tham số thứ hai, hiển thị hộp thoại thông báo cho người dùng.Nếu giá trị của
// tham số thứ nhất nhỏ hơn hoặc bằng tham số thứ hai, trả về tổng của hai tham số.
//code
// let a = Number(prompt('Nhập số thứ nhất'));
// let b = Number(prompt('Nhập số thứ 2'));
// let c = 0;
// function tong(a,b){
//     if(a > b){
//         alert(`${a} là số lớn nhất`);
//         return;
//     } else {
//         c = a + b;
//         return console.log(c);
//     }
// }
// tong(a,b);



// Bài 4: Thêm các hàm alert() vào những vị trí thích hợp trong đoạn mã sau để
// bạn có thể nhìn thấy giá trị của biến result trước và sau lời gọi hàm. Đoạn mã
// có dạng như sau:
//code
// function addNumbers() {
//      firstNum = 4;
//      secondNum = 8;
//      result = firstNum + secondNum;
//      return result;
//     }
//     alert(result = 0);
//     alert(result = addNumbers());


// Bài 5: Chuyển đổi giữa feet và meters
//code
// let foot = parseInt(prompt('Nhập số foot'));
// let meter = parseInt(prompt('Nhập số meter'));
// function footToMeter (meter){
//     meter = 0.305 * foot;
//     return meter;
// }
// function meterTofoot(foot){
//     foot = 3.279 * meter;
//     return foot;
// }

// console.log(footToMeter(foot));
// console.log(meterTofoot(meter));


// Bài 6: Tạo hàm để kiểm tra số nguyên tố
//code
// function isPrime(number) {
//     let check = 0;
//     for (let i = 2; i < number; i++) {
//         if (number % 2 === 0) {
//             check += 1;
//         }
//     }
//     if (check > 0) {
//         console.log(`${number} is not prime number`);
//     } else {
//         console.log(`${number} is prime number`);
//     }
// }
// function isPrime(num) {
//     for (var i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// function display(n) {
//     var arr = [2];
//     for (var i = 3; i < n; i += 2) {
//         if (isPrime(i)) {
//             arr.push(i);
//         }
//     }
//     console.log(arr);
// }
// display(100);