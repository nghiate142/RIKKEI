// EX1: Viết một đoạn mã cho phép người dùng nhập vào một số n. Tiến hành kiểm tra xem đó có phải là một số hợp lệ hay không. 
// Nếu đó là số hợp lệ, tiến hành tính kết quả của biểu thức A = 0 + 1 + 2 + … + n
    //code
        // let n = prompt('Nhập một số bất kỳ');
        // let A = 0;
        // if (parseInt(n)) {
        //     console.log(n)
        //     for (i = 0 ; i <= n ; i++) {
        //         A = A + i
        //     }
        //     console.log(A)
        // }
        // else {
        //     alert('Số không hợp lệ');
        // }
        
        
        





// EX2: Viết một đoạn mã cho phép người dùng nhập vào một số n. Tiến hành kiểm tra xem đó có phải là một số nguyên hợp lệ hay không. 
//     Nếu đó là số hợp lệ, tiến hành tính kết quả của biểu thức B = 1 x 2 x 3 x … x n

    //code
        // let n = prompt('Nhập vào một số bất kỳ');
        // let B = 1;
        // if (parseInt(n)) {
        //     console.log(n)
        // for (i = 1; i <= n; ++i ) {
        //         B = B * i;
        //         console.log(B)
        //     }
        // }
        // else {
        //     alert('Sai cú pháp');
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





// EX7:Viết một đoạn mã cho phép người dùng nhập vào một số nguyên dương n. Tiến hành kiểm tra xem đó có phải là một số hợp lệ hay không
// Nếu đó là số hợp lệ, tiến hành in ra màn hình console các số từ 0 — n theo dạng chẵn lẻ.
// Input: n = 5
// 	Expected output:
// 0 - chẵn
// 	1 - lẻ
// 	2 - chẵn
// 	3 - lẻ
// 	4 - chẵn
// 	5 - lẻ
    //code
        // let n = prompt('Điền vào 1 số bất kỳ');
        // if (parseInt(n)) {
        //     console.log(n, ' Thoả mãn')
        // }
        // else {
        //     console.log(n, ' Thoả mãn');
        // }
        // for(i = 0; i <= n; i += 1) {
        //     if(i % 2 === 0) {
        //         console.log(i, ' - chẵn');
        //     }
        //     else {
        //         console.log(i, ' - lẻ');
        //     }
        // }





// EX8: Viết một đoạn mã cho phép người dùng nhập vào một số nguyên dương n. Tiến hành kiểm tra xem đó có phải là một số hợp lệ hay không
// Nếu đó là số hợp lệ, tiến hành in ra màn hình console các số chẵn trước, sau đó in ra các số lẻ sau
// Input: n = 5
// 	Expected output:
//  0 
// 	2 
// 	4 
// 	1 
// 	3 
// 	5
    //code
        // let n = prompt('Nhập vào một số bất kỳ');
        // if(parseInt(n)) {
        //     console.log(n, ' Thoả mãn')
        // }
        // else{
        //     console.log(n, ' Không thoả mãn');
        // }
        // for (i = 0; i <= n; i += 1) {
        //     if (i % 2 === 0) {
        //         console.log(i, ' - chẵn');
        //     }
        // }
        // for (i = 0; i <=n; i += 1) {
        //     if (i % 2 != 0) {
        //         console.log(i, '  - lẻ');
        //     }
        // }





// EX9: Viết một đoạn mã cho phép người dùng nhập vào một số nguyên dương n. Tiến hành kiểm tra xem đó có phải là một số hợp lệ hay không
// Nếu đó là số hợp lệ, tiến hành kiểm tra xem số đó có phải là số nguyên tố hay không và in ra màn hình kết quả
// Input: n = 1
// 	Expected output:
//     1 không là số nguyên tố

// 	Input: n = 3
// 	Expected output:
//     3 là số nguyên tố
    //code 1 
        // let n = prompt('Nhập vào một số bất kỳ');
        // if(parseInt(n)) {
        //     console.log(n, ' Thoả mãn')
        // }
        // else{
        //     console.log(n, ' Không thoả mãn'); 
        // }
        // for (i = 0; i < n; i += 1) {
        //     if (n >= 2) {
        //         for(a = 2; a < n; a += 1){
        //             if (n % a === 0){
        //                 console.log(n, ' Không phải số nguyên tố');
        //             }
        //             else {
        //                 console.log(n, ' là số nguyên tố');
        //             }
        //             break;
        //         }
        //     }
        //     else {
        //         console.log(n, ' không thoả mãn');
        //     }
        // }

    //code 2:
        // let n = prompt('Nhập vào một số bất kỳ');
        // if(parseInt(n) && n >= 2) {
        //     console.log(n, ' Thoả mãn')
        // }
        // else{
        //     console.log(n, ' Không thoả mãn'); 
        // }
        // for (i = 2; i < n; i += 1) {
        //             if (n % i === 0){
        //                 console.log(n, ' Không phải số nguyên tố');                      
        //             }
        //             else {
        //                 console.log(n, ' là số nguyên tố');
        //             }
        //             break;
        // }
        
        


// EX10: Viết một đoạn mã cho phép người dùng nhập vào một số nguyên dương n. Tiến hành kiểm tra xem đó có phải là một số hợp lệ hay không
// Nếu đó là số hợp lệ, tiến hành in ra màn hình console 
// Một tam giác vuông như sau:

// 	Input: n = 4
// 	Expected output:
//     *
//     * *
//     * * *
//     * * * *
    //code
        // let n = prompt('Nhập vào một số bất kỳ');
        // if(parseInt(n)) {
        //     console.log(n, ' Thoả mãn')
        // }
        // else{
        //     console.log(n, ' Không thoả mãn'); 
        // }
        // for (i = 0; i < n; i+= 1) {
        //     for(j = 0; j < i; j = j + 1){
        //         document.write(' * ');
        //     }
        //         document.write(' * ', '<br/>')
        // }       
        

// Một tam giác vuông như sau:

//     Input: n = 4
//     Expected output:
//     * * * *
//     * * *
//     * *
//     *
    //code
    // let n = prompt('Nhập vào một số bất kỳ');
    // if(parseInt(n)) {
    //     console.log(n, ' Thoả mãn')
    // }
    // else{
    //     console.log(n, ' Không thoả mãn');
    // }
    // for (i = n - 1 ; i >= 0; i= i - 1) {
    //         for(j = i - 1 ; j >= 0; j = j - 1){
    //             document.write(' * ');
    //         }
    //             document.write(' * ', '<br/>')
    //     }     

//     Một tam giác vuông như sau:

// 	Input: n = 4
// 	Expected output:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
    //code
    // let n = prompt('Nhập vào một số bất kỳ');
    //     if(parseInt(n)) {
    //         console.log(n, ' Thoả mãn')
    //     }
    //     else{
    //         console.log(n, ' Không thoả mãn'); 
    //     }
    //     for (i = 1; i <= n; i+= 1) {
    //         for(j = 2; j <= i; j++){
    //             document.write(j - 1);
    //         }
    //             document.write(i, '<br/>')
    //     }       


//     Một tam giác vuông như sau:

// 	Input: n = 4
// 	Expected output:
// 4 3 2 1
// 4 3 2
// 4 3
// 4
    //code
        // let n = prompt('Nhập vào một số bất kỳ');
        // if(parseInt(n)) {
        //     console.log(n, ' Thoả mãn')
        // }
        // else{
        //     console.log(n, ' Không thoả mãn'); 
        // }
        // for (i = 1; i <= n; i+= 1) {
        //     for(j = 2; j <= i; j++){
        //         document.write(j - 1);
        //     }
        //         document.write(i, '<br/>')
        // }  