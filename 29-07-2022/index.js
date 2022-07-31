// Bài 1
// let n = parseInt(prompt('nhập số cần so sánh'));
// let a = n
// if (n %= 2 === 0) {
//     console.log(a + ' là số chẵn');
// }
// else{
//     console.log(a + ' là số lẻ');
// }



//bài 2
// let a = parseInt(prompt('nhập vào số thứ nhất'));
// let b = parseInt(prompt('nhập vào số thứ hai'));

// if (a > b) {
//     console.log(a + ' > ' + b + ' là đúng rồi đấy');
// }
// else {
//     console.log(a + ' > ' + b + ' Sai mẹ rồi viết lại');
// }



// Bài 3
// let a = parseInt(prompt('nhập vào số thứ nhất'));
// let b = parseInt(prompt('nhập vào số thứ hai'));
// let c = parseInt(prompt('nhập vào số thứ ba'));

// if (a > b && a > c) {
//     console.log(a + ' là số lớn nhất');
// }
// else if (a < b && a > c) {
//     console.log(b + ' là số lớn nhất');
// }
// else {
//     console.log(c + ' là số lớn nhất');
// }

parseFloat


//Bài 4
    // let a = parseInt(prompt('Nhập số thứ nhất'));
    // let b = parseInt(prompt('nhập vào số thứ 2'));
    // let c = parseInt(prompt('nhập vào số thứ 3'));

    // if (a < b && a < c) {
    //     console.log(a + ' là số bé nhất');
    // }
    // else if (a > b && c > a) {
    //     console.log(b + ' là số bé nhất');
    // }
    // else {
    //     console.log(c + ' là số bé nhất');
    // }




// bài 5

// let hight = parseFloat(prompt('nhập vào chiều cao của bạn (cm)'));
// let weight = parseFloat(prompt('nhập cân nặng của bạn (kg)'));
// let BMI = weight / (hight * 2);
// console.log(BMI);

// if (BMI < 18.5) {
//     console.log('chỉ số gấy cần ăn thêm');
// }
// else if (18.5 < BMI && BMI < 23) {
//     console.log('chỉ số bình thường');
// }
// else if (23 <= BMI && BMI < 25) {
//     console.log('Nguy cơ béo phì -> bớt ăn đi');
// }
// else if(25 <= BMI && BMI < 30) {
//     console.log('béo phì cấp độ 1 rồi đấy khóa mõm lại');
// }
// else {
//     console.log('béo phì nặng rồi cất cái mồm đi');
// }


// bài 6

// let a = Number(prompt('nhập số a'));
// if (a != 0) {
//     let b = Number(prompt('nhập số b'));
//     let c = Number(prompt('nhập số c'));

//     let y = (b * b) - (4 * a * c);

//     if (y === 0) {
//         let x = -(b / (2 * a))
//         console.log('Phương trình có nghiệm kép x =' + x);
//     }
//     else if (y > 0) {
//         let x1 =  (-b + Math.sqrt(y)) / (2 * a);
//         let x2 =  (-b - Math.sqrt(y)) / (2 * a);
//         console.log('phương trình có 2 nghiệm');
//         console.log('nghiệm thứ nhất = ' + x1);
//         console.log('nghiệm thứ 2 = ' + x2);
//     }
//     else {
//         console.log('phương trình vô nghiệm');
//     }

// } else {
//     console.log('Phương trình sai')
// }





// Bài 7


// let month = parseInt(prompt('nhập tháng'))


// switch (month) {
//     case 1:
//     case 2:
//     case 3:
//         console.log('Mùa Xuân');
//         break;
//     case 4:
//     case 5:
//     case 6:
//         console.log('Mùa Hạ');
//         break; 
//     case 7:
//     case 8:
//     case 9:
//         console.log('Mùa Thu');
//         break; 
//     case 10:
//     case 11:
//     case 12:
//         console.log('Mùa Đông');
//         break; 
                   
// }









// let year = parseInt(prompt("nhập 1 năm bất kỳ"));
//   if (year % 4 == 0) {
//     if (year % 100 == 0) {
//       if (year % 400 == 0) {
//         alert(year + " đây là năm nhuận");
//       } else {
//         alert(year + " đây không phải năm nhuận");
//       }
//     } else {
//       alert(year + " đây là năm nhuận");
//     }
//   } else {
//     alert(year + " đây không phải năm nhuận");
//   }






// let a = parseFloat(prompt(' điền vào số thứ nhất'));
// 	let b = parseFloat(prompt(' điền vào số thứ hai'));
// 	let c = prompt(' điền 1 dấu bất kỳ: + , -, *, /');
	
	
// 	switch (c) {
// 		case '+':
// 			console.log(a + b);
// 		case '-':
// 			console.log(a - b);
// 		case '*':
// 			console.log(a * b);
// 		case '/':
// 			console.log(a / b);
// 	break;
	
// 	default: console.log('không thoả mãn điều kiện');
//     }