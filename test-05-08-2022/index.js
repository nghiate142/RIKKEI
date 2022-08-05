// Bài 1 : Cho 1 chuỗi str. Viết chương trình đảo ngược chuỗi và 
// in ra kết quả. (1đ)
// ● Đầu vào: str 
// ● Đầu ra: đảo ngược chuỗi và in ra kết quả
// ● Ví dụ:
// ○ Cho: str = "program"; in ra: "margorp" ○ Cho: str = "data"; in ra: "atad"
// ● Lưu ý: không sử dụng hàm reverse()

        //code
        // let str = prompt('Nhập 1 chuỗi').split('');
        // let newarr = [];
        // let a = ''
        // for (let i = str.length - 1; i >= 0; i--) {
        //     newarr = str[i]
        //     a = a + ' ' + newarr
        // }
        // console.log(a)


// Bài 2 : Viết 1 chương trình với đầu vào là 1 chuỗi ký tự và in ra 
// chuỗi đó với các ký tự đầu của chữ mỗi chữ được viết hoa. 
// (1đ)
// ● Đầu vào: str
// ● Đầu ra: In ra chuỗi với ký tự đầu được viết hoa.
// ● Ví dụ
// ○ Cho "this is A Test"; In ra "This Is A Test"
// ○ Cho "hello rikkei academy"; In ra "Hello Rikkei Academy”    
       
    //code
        // let str = prompt('Nhập 1 chuỗi').toLowerCase();
        // console.log(str)
        // let strArr = str.split(' ');
        // let arr = [];
        // for (i = 0; i < str.length; i++) {
        //     let word = strArr[i];
        //     let letter = word.split('');
        //     letter[0] = letter[0].toUpperCase();
        //     word = letter.join(' ');
        //     arr.push(word);
        // }
        // console.log(word)
      



// Bài 3 : Viết một chương trình xóa các phần tử trùng của một 
// mảng và in ra kết quả. (1đ)
// ● Đầu vào: 1 mảng
// ● Đầu ra: Mảng mới với các ký tự (hoặc số) không trùng nhau
// ● Ví dụ
// ○ Cho 
// Arr=[“one”,”two”,”three”,”one”,”one”,”four”,”five”,”four”,”five”fi
// ve”]; In ra Arr=[“one”,”two”,”three”,”four”,”five”];
// ○ Cho Arr=[1,2,3,3,4,5,4,4,4,5,5]; In ra Arr=[1,2,3,4,5]

    //code1
        // let Arr = ['one','two','three','one','one','four','five','four','five','five'];
        // let a = [];
        // Arr.forEach((c) => {
        //     if (!a.includes(c)) {
        //         a.push(c);
        //     }
        // });
        
        // console.log(a);

    //code2
    // let Arr = [1,2,3,3,4,5,4,4,4,5,5];
    //     let result = [];
    //     for (let i = 0; i <= Arr.length - 1; i++) {
    //         let element = Arr[i];
    //         if (result.indexOf(element) < 0) {
    //             result.push(element);
    //         }
    //     }
    //     console.log(result);

// Bài 4 : Viết một chương sắp xếp các phần tử là số ở trong 
// mảng theo thứ tự tăng dần. (1đ)
// ● Đầu vào: 1 mảng
// ● Đầu ra: Mảng mới với số đã được sắp xếp theo thứ tự tăng dần
// ● Ví dụ
// ○ Cho Arr=[5, 2, 3, 4, 1]; In ra Arr=[1,2,3,4,5]
// ● Lưu ý: Không dùng hàm sort()

    //code
    //     let arr = [5, 2, 3, 4, 1];
    //     let newarr = [];
    //     let str1;
    //     let str2;
    //     let a = arr.length
    //     console.log(a)
    //     for (let i = 0; i < a; i++) {
    //         str1 = Math.min(...arr);
    //         for (let i = 0; i < a; i++) {
    //             if (str1 === arr[i]) {
    //                 str2 = i;
    //             }
    //         }
    //         arr.splice(str2,1)
    //         newarr.push(str1);
    //     }
    //   console.log(newarr)

// Bài 5 : Tạo một mảng gồm 3 nhân viên Rikkei Academy (tên 
// nhân viên). Xây dựng chương trình quản lý nhân viên với các 
// chức năng (Read, Create, Update, Delete). (2đ)
    //code

// let nameReikkei = ['Duc', 'Khoa', 'Huong'];
// let inputUsr = prompt('Enter input R/C/U/D: ').toLowerCase();
// switch (true) {
//     case inputUsr === 'r':
//         for (let i = 0; i < nameReikkei.length; i++) {
//             console.log(`${i + 1}.`, nameReikkei[i]);
//         }
//         break;
//     case inputUsr === 'c':
//         let createUsr = prompt('Enter name create: ');
//         nameReikkei.push(createUsr);
//         for (let i = 0; i < nameReikkei.length; i++) {
//             console.log(`${i + 1}.`, nameReikkei[i]);
//         }
//         break;
//     case inputUsr === 'u':
//         for (let i = 0; i < nameReikkei.length; i++) {
//             console.log(`${i + 1}.`, nameReikkei[i]);
//         }
//         let usrInput = prompt('Enter name in list:');
//         let usrUpdate = prompt('Enter name update:');
//         let u;
//         for (i = 0; i < nameReikkei.length; i++) {
//             if (usrUpdate === nameReikkei[i]) {
//                 u = i;
//             }
//         }
//         nameReikkei.splice(u, 1, usrUpdate);
//         for (let i = 0; i < nameReikkei.length; i++) {
//             console.log(`${i + 1}.`, nameReikkei[i]);
//         }
//         break;
//     case inputUsr === 'd':
//         let inPutDel = prompt('Enter name delete: ');
//         let check;
//         for (let i = 0; i < nameReikkei.length; i++) {
//             if (inPutDel == nameReikkei[i]) {
//                 check = i;
//             }
//         }
//         nameReikkei.splice(check, 1);
//         for (let i = 0; i < nameReikkei.length; i++) {
//             console.log(nameReikkei[i])
//         }
//         break;
// }


    

