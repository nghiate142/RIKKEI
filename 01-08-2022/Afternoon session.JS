// EX1: Viết một đoạn mã cho phép người dùng nhập vào một số n. Tiến hành kiểm tra xem đó có phải là một số hợp lệ hay không. 
// Nếu đó là số hợp lệ, tiến hành tính kết quả của biểu thức A = 0 + 1 + 2 + … + n
    //code
        // let n = prompt('Nhập một số bất kỳ');
        // let A = 0;
        // if (parseInt(n)) {
        //     console.log(n)
        // }
        // else {
        //     alert('Số không hợp lệ');
        // }
        // for (i = 0 ; i <= n ; i++) {
        //     A = A + i
        // }
        // console.log(A)





// EX2: Viết một đoạn mã cho phép người dùng nhập vào một số n. Tiến hành kiểm tra xem đó có phải là một số nguyên hợp lệ hay không. 
//     Nếu đó là số hợp lệ, tiến hành tính kết quả của biểu thức B = 1 x 2 x 3 x … x n

    //code
        // let n = prompt('Nhập vào một số bất kỳ');
        // let B = 1;
        // if (parseInt(n)) {
        //     console.log(n)
        // }
        // else {
        //     alert('Sai cú pháp');
        // }
        // for (i = 1; i <= n; ++i ) {
        //     B = B * i;
        //     console.log(B)
        // }







// EX3:Viết một đoạn mã cho phép người dùng nhập vào một số n. Tiến hành kiểm tra xem đó có phải là một số nguyên hợp lệ hay không. 
//     Nếu đó là số hợp lệ, tiến hành tính tổng của biểu thức C = 1 + ½ + ⅓ + … + 1/n 
    //code
        // let n = prompt('Nhập vào một số bất kỳ');
        // let C = 1;
        // if (parseInt(n)) {}
        // else {
        //     alert('Sai cú pháp');
        // }
        // for (i = 1; i <= n; ++i) {
        //     C = C / i;
        // }
        // console.log(C)

    




// EX4: Viết một đoạn mã cho phép người dùng nhập vào một số n. Tiến hành kiểm tra xem đó có phải là một số nguyên hợp lệ hay không. 
// Nếu đó là số hợp lệ, tiến hành tính tổng của biểu thức A = 1 x ½  + ½ x ⅓  + ⅓ x ¼  + … + 1/(n-1) x 1/n
    //code
        // let n = prompt('Nhập vào số bất kỳ');
        // let A 
        // let C = 0
        // if (parseInt(n)){}
        // else {
        //     alert('sai cú pháp');
        // }
        // for (i = 1; i <= n; i++) {
        //     C = C + (1 / (i * (i + 1))) ;
        // }
        // A = 1 + C + (1 / (n - 1)) + (1 / n);
        // console.log(A);







// EX5: Viết một đoạn mã cho phép người dùng nhập vào một số n. Tiến hành kiểm tra xem đó có phải là một số hợp lệ hay không. 
//     Nếu đó là số hợp lệ, tiến hành in ra bảng cửu chương của số đó từ 1 — 10
//     Input: n = 8
//     Expected output: 8 x 1 = 8
// 			            8 x 2 = 16
//                      …
//                      8 x 10 = 80
    //code
    //     let n = prompt('Nhập vào số bất kỳ');
    //     let A 
    //     if (parseInt(n)){}
    //     else {
    //         alert('sai cú pháp');
    //     }
    //    for(i = 1; i <= 10; i++) {
    //     A = n * i
    //     console.log(n + ' * ' + i + ' = ' + A);
    //    }






// EX6:Viết một đoạn mã cho phép người dùng nhập vào một số n. Tiến hành kiểm tra xem đó có phải là một số nguyên dương hợp lệ hay không. 
//     Nếu đó là số hợp lệ, tiến hành in ra màn hình console dãy số fibonacci n phần tử
//     Input: n = 13
// 	   Expected output: 0, 1, 1, 2, 3, 5, 8, 13, …, 144 (13 số) 
    //code
    // let number = parseInt(prompt('Enter the number of terms: '));
    // let n1 = 0, n2 = 1, nextTerm;
    
    // console.log('Fibonacci Series:');
    
    // for (let i = 1; i <= number; i++) {
    //     console.log(n1);
    //     nextTerm = n1 + n2;
    //     n1 = n2;
    //     n2 = nextTerm;
    // }