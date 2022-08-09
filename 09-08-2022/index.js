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
let a = prompt('Nhập vào 1 số bất kỳ');
console.log(typeof(a));
function check(a) {
    if (a < 2) {
        alert('Không phải số nguyên tố');
        return;
    }else if(a == 2) {
        alert('là số nguyên tố')

    }
    for (i = 2; i < a; i++) {
        if (a % i === 0) {
            alert('không phải số nguyên tố');
            break;
        }
        else {
            alert('là số nguyên tố')
            break;
        }
    }
}

let result =check(a);
console.log(result);