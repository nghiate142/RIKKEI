//Bài 1: Viết chương trình cộng hai số
//code
// let a = Number(prompt('Nhap a:'));
// let b = Number(prompt('Nhap b:'));

// function total(a,b){

//     return a+b;
// }
// console.log(total(a,b))



//Bài 2: Tính tổng các số lẻ trong mảng. Sử dụng Return
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





//Bài 1: Viết hàm tính bình phương của một số bất kỳ được đưa vào. Gọi hàm vừa xây dựng
// được.
//code
// let bp = Number(prompt('Nhap so: '));
// function binhphuong(bp){

//     return bp**2;
// }
// console.log(binhphuong(bp))



//Bài 2: Viết hàm tính diện tích, hàm tính chu vi hình tròn. Gọi hàm vừa xây dựng được
//code
// function dientich(r){
// let s =0;

// return s= 3.14 *(r**2);

// }
// console.log(dientich(4))



//Bài 3: Viết hàm tính giai thừa của một số nguyên bất kỳ được đưa vào. Gọi hàm vừa xây
// dựng được.
//code
// let number = Number(prompt('Nhap so: '));
// function giaithua(number){
//     let a = 1;     
//     for(let i = number; i>0;i--){

//     a = a * i;     
//    }
//    return a;
// }
// console.log(giaithua(number))



//Bài 4: Viết hàm kiểm tra xem ký tự nhập vào có phải là ký tự số không. Nếu là ký tự số hàm
// trả về true, ngược lại trả về false.
//code
// let a =Number (prompt('Nhap a: '));

// function check (a){

//     if(a == Number(a)){
//         return true;
//     }else{
//         return false;
//     }
// }
// alert(check(a))



// Bài 5: Viết hàm nhận vào 3 số nguyên bất kỳ, trả về số nguyên có giá trị nhỏ nhất.
//code
    // let a = parseInt(prompt('Nhập số đầu tiên'));
    // let b = parseInt(prompt('Nhập số thứ 2'));
    // let c = parseInt(prompt('Nhập số thứ 3'));
    // function min(a,b,c){
    //     if (a <= b && a <= c){
    //         console.log(a, ' là số nhỏ nhất');
    //     } else if (b <= a && b <= c){
    //         console.log(b, ' là số nhỏ nhất');
    //     } else {
    //         console.log(c, ' là số nhỏ nhất')
    //     }
    //     return;
    // }
    // min(a,b,c);



//Bài 6: Viết hàm nhận vào một số, kiểm tra xem nếu số đưa vào có phải là nguyên dương
//không. Nếu là nguyên dương trả về true, ngược lại trả về false.
//code
// let nguyenduong = Number(prompt('Nhap so:'));
// function check(nguyenduong){

//     if(parseInt(nguyenduong) > 0){

//         return true;
//     }else{
//         return false;
//     }
// }
// alert(check(nguyenduong))



//Bài 7: Viết hàm truyền vào 2 số nguyên bất kì, thực hiện đổi chỗ hai số nguyên đó.
//code
// let a =2;
// let b = 3;
// function doicho(a,b){
// let temp;
// temp =0;
// temp = a;
// a=b
// b= temp;

// return [a,b];

// }
// console.log(doicho(a,b))




//Bài 8: Viết hàm truyền vào mảng số nguyên bất kỳ, sau đó đảo ngược mảng số nguyên đó.
//code
// function array(number){
// let a =[];
//     for(let i=number.length-1; i>=0;i--){

//        a.push(number[i]);
//     }
//     console.log(a)

// }
// let number =[1,2,3,4,5,6,7,9]
// array(number);





// Bài 9: Viết hàm truyền vào một mảng ký tự, và một ký tự bất kỳ, kiểm tra xem ký tự bất kỳ
// đó có nằm trong mảng không. Nếu có trả về số lần xuất hiện của ký tự đó, nếu không trả về - 1.
//code
// let inputArray = prompt('Enter input anythings:').split('');
// let input = prompt('enter a string search: ');
// function check(input) {
//     let a = 0;
//     for (let i = 0; i < inputArray.length; i++) {

//         if (inputArray[i] === input) {
//             a = a + 1;
//         }
//     }
//     if (a > 0) {
//         return `${a} was hide `;
//     } else {
//         return '-1';
//     }
// }
// console.log(check(input))