//exercise 1: tính tổng biểu thức A = 1 + 2 + 3 +...+ 10
    //code 
        // let a = 0;
        // for (let i = 0; i <= 10; i++ ) {
        //         a = a + i;
        //         console.log(a)
        //     }



// Ex2:
// Cho người dùng nhập vào n
// Tính tổng của biểu thức B = 1 + 2 + 3 + ... + n
    //code 
            // let n = parseInt(prompt('Nhập vào số n'));
            // let B = 0
            // for (i = 0; i <= n; i++) {
            //     B = B + i;
            //     console.log(B)
            // }




// Ex3:
// Cho người dùng nhập vào số n
// Tính tổng của biểu thức C = 1^2 + 2^2 + 3^2 + ... + n^2
    //code
        // let n = parseInt(prompt('Nhập vào số n'));
        // let c = 0
        // for(i = 1; i <= n; i++){
        //     c = c + (i)**2;
        //     console.log(c)  
        // }
           





// Ex4:
// Cho người dùng nhập vào số n
// Tính tích của biểu thức D = 1 * 2 * 3 * ... * n
    //code
        // let n = parseInt(prompt('Nhập vào số n'));
        // let d = 1
        // for(i = 1; i <= n; i++) {
        //     d = d * i
        //     console.log(d)
        // }




// Ex4:
// Cho người dùng nhập vào số n
// Tính tổng của biểu thức E = 1/1 + 1/2 + 1/3 + ... + 1/n
    //code
        // let n = parseInt(prompt('Nhập vào số n'));
        // let e = 1
        // let d;
        // for (i = 1; i <=n; i++) {
        //     d = e + 1 / i;
        //     console.log(i);
        //     console.log(d);
        // }




//Ex6:
//Cho người dùng nhập vào chuỗi ký tự bất kỳ và in ra chuỗi ngược lại
    //code
        // let a = String(prompt('Nhập vào'));
        // for (let i = a.length - 1; i >= 0; i-- ) {
        //     console.log(i, a[i]);
            
        // }





//Ex7: cho người dùng nhập vào 1 chuỗi ký tự bất kỳ, in ra chuỗi mới với mỗi ký tự của chuỗi cũ được biến thành 1 dạng ký tự
        //code
        // let a = String(prompt('Nhập vào 1 chuỗi'));
        // let b = ' '
        // for (let i = 0; i <= a.length - 1; i++) {
        //     b = b + `<${a[i]}>`; 
        // }
        // console.log(b)






        

//ex8:

//cho sẵn một chuỗi cart tương tự như giỏ hàng của bạn
//Điều hướng người dùng chỉ nhập vào 5 chữ cái c/R/U,F,E
//-- c: Hỏi người dùng nhập item muốn thêm vào cart
//--- Tiến hành thêm item vào cart và in ra màn hình
//Ví dụ: Input: thit cho
//output: `vanilla, chocolate, cookies, sting, redbull, thit cho`
// -- R: In ra toàn bộ những item trong cart
//        output: `vanilla, chocolate, cookies, sting, redbull, thit cho`
// -- U: Hỏi người dùng muốn update item nào trong cart
// ----- Cho người dùng nhập vào item muốn thay thế trong cart
// ----- Tiến hành thay và in ra màn hình các item trong cart
// -- D: Hỏi người dùng muốn xoá item nào trong cart
// ----- Tiến hành xoá và in ra màn hình các item trong cart
// -- E: Biến chương trình thay vòng lặp vĩnh cửu cho đến khi
// ----- người dùng nhập vào E thì in ra màn hình thank you

let cart = `vanilla, chocolate, cookies, sting, redbull`;
let state = true;

while (state) {
    let usrInput = prompt('please inpu C/R/U/D/E');
if(usrInput ==='C'){
                                               
    let item = prompt('Chọn sản phẩm');             //Thêm sp mới vào cart = câu lệnh promt
                                                
    cart = cart + `, ${item}`                       //nối chuỗi in ra console string cart= +
                                                
    console.log(cart);                              //in ra console
}else if(usrInput === 'R'){
                                                
    console.log(cart)                               //B1: in ra conlse string cart
}else if(usrInput==='U'){
                                                
    let updateItem = prompt('Chọn sản phẩm');       //B1:sd câu lệnh prompt() cho ng dùng nhập vào item muốn update
                                                
    let newItem = prompt('Chọn sản phẩm mới');      //B2: Sử dụng lệnh prompt() cho ng dùng nhập vào item mới thay thế cho item trên
                                                
    cart = cart.replace(updateItem, newItem);       //B3: tiến hành update và in ra màn hình console string cart sau khi được update
    console.log(cart)
}else if(usrInput === 'D'){
    let deleteItem = prompt('Nhập item cần xoá');   //B1: Sử dụng câu lệnh prompt() cho ng dùng nhập vào item muốn xoá
                                                
    cart = cart.replace(`, ${updateItem}`, '' );    //B2: xáo và in ra string cart sau khi đc xoá
                                                
    console.log(cart)
}else if(usrInput ==='E'){
                                                
    break;                                          //Dừng ctrinh
}
}