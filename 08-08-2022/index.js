// let arr = [2,0,67,6,4,3,0,0,0,5,1,55,6,66,33,23,6];
// let min = arr[0]
// for (i = 0; i < arr.length; i++){
//     if (min > arr[i]) {
//         min = arr[i]
//        //console.log(min)
//     }
// }
// console.log(min)
// let n =arr.length;
// for (let i = 0; i < n; i++) {
//     for (let j = n; j > 0; j--) {
//         if (arr[i] === arr[j]){
//             // console.log(j)
//             arr.splice(j,1);
//         }

//     }
// }
// console.log(arr)


// let a = [];
// for (let i = 0; i < arr.length; i++) {
//     if (a.indexOf(arr[i]) == -1) {
//     a.push(arr[i]);
//     }
// }
// console.log(a);


// let myInfor = {
//     name: 'Duc',
//     age: 25
// };
// for (let abc in myInfor){
//     console.log(abc)
//     console.log(`${myInfor[abc]}`)
// console.log(`${abc} = ${myInfor[abc]}`);
// }
// console.table(myInfor);


// let myInfor = {
//     name: 'Duc',
//     age: 25
// };
// delete myInfor.name;
// console.log(myInfor);





// Bài 1:Khởi tạo một object để mô phỏng một cuốn từ điển (dictionary) của developer, 
// những thuộc tính với những cặp key — value được mô tả ở dưới đây.

//code
// let dictionary = {
//     agile: 'Agile is an iterative approach to project management and software development',
//     scrum: 'Scrum is a lightweight framework that helps people, teams and organizations generate value through adaptive solutions for complex problems.',
//     aws: 'Aws stands for Amazon web services, a cloud solution for web development',
//     pm: 'The short version  of Project Manager, the person in charge of the final result of a projec',
//     uiUx: 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels'
// };
// console.table(dictionary);


// bài 2:Viết một đoạn mã mô phỏng quá trình tìm kiếm ở trong từ điển
// Bài 3:Viết một đoạn mã cho phép người dùng có thể thêm từ mới và ý nghĩa của nó nếu chưa có trong developer dictionary

//Code
// let dictionary = {
//         agile: 'Agile is an iterative approach to project management and software development',
//         scrum: 'Scrum is a lightweight framework that helps people, teams and organizations generate value through adaptive solutions for complex problems.',
//         aws: 'Aws stands for Amazon web services, a cloud solution for web development',
//         pm: 'The short version  of Project Manager, the person in charge of the final result of a projec',
//         uiUx: 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels'
//     };
// alert('Hi there, this is dev dictionary');
// for (let key in dictionary){
//     console.log(`${key}`);
// }
// let input = prompt('Enter the keyword').toLowerCase();

// switch (true) {
//     case input === 'agile':
//         alert(dictionary.agile);
//         break;
//     case input === 'scrum':
//         alert(dictionary.scrum);
//         break;
//     case input === 'aws':
//         alert(dictionary.aws);
//         break;
//     case input === 'pm':
//         alert(dictionary.pm);
//         break;
//     case input === 'uiux':
//         alert(dictionary.uiUx);
//         break;
//     default:
//         alert(`False ${input}`);
//         break;
// }

// let addKey = prompt('Enter a keywrod').toLowerCase();
// let content = prompt('we could not find your word: ' + addKey + ' , leave your explanation');
// dictionary[addKey] = content;
// alert('Done');
// let newInput = prompt('Enter a keyword').toLowerCase() ;
// switch (true){
//     case newInput === addKey:
//         alert(content);
//         break;
//     default:
//         aler(`False`)
// }

//         alert('Hi there, this is dev dictionary');
// let enter = prompt('Enter a keyword');
// if(dictionary[enter] === undefined){
//     alert('We could not find your word');
// } else {
//     alert(dictionary[enter]);
// }



// Bài 5:Khởi tạo một biến có tên là cars bao gồm các thuộc tính brand, price, 
// color và category có các giá trị được trình bày như ở bảng dưới đây.

// code
let cars = [
    {
        Name: 'Tesla model 3',
        Brand: 'tesla',
        Price: '142800',
        Color: 'White',
        Category: 'SUV',
    },
    {
        Name: 'Audi A8',
        Brand: 'teAudisla',
        Price: '184870',
        Color: 'Black',
        Category: 'SUV',
    },
    {
        Name: 'Vinfast Lux 2.0',
        Brand: 'Vin',
        Price: '21490',
        Color: 'Gray',
        Category: 'SUV',
    },
    {
        Name: 'Honda CRV',
        Brand: 'Honda',
        Price: '84900',
        Color: 'Blue',
        Category: 'Hatchback',
    }
];
    // console.table(cars)
// console.log(cars)
//5.1
// for (i = 0; i < cars.length; i++){
//     console.log(`Name: ${cars[i].Name}`);
//     console.log(`Price: ${cars[i].Price}`);
// }

//5.2
    // let userInput = Number(prompt('Nhập tên xe bất kỳ'));
    // console.log(`Name: ${cars[userInput].Name}`);
    // console.log(`Brand: ${cars[userInput].Brand}`);
    // console.log(`Price: ${cars[userInput].Price}`);
    // console.log(`Color: ${cars[userInput].Color}`);
    // console.log(`Category: ${cars[userInput].Category}`);

//5.3
    // let userInput = prompt('Nhập thể loại xe');
    // for (i = 0; i < cars.length; i++){
    //     if (userInput == cars[i].Category) {
    //     console.log(cars[i].Name);
    //     console.log(cars[i].Brand);
    //     console.log(cars[i].Price);
    //     console.log(cars[i].Color);
    //     console.log(cars[i].Category);
    //     }
    // }

//5.4
    
    for (i = 0; i < cars.length; i++){
        cars[i].Providers = prompt('Providers ' + cars[i].Name + ' Enter')
    }
    console.table(cars)

//5.5
    let userInput = prompt('Provider to enter');
    for (i = 0; i < cars.length; i++) {

    }