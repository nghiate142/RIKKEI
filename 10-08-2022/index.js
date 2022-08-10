// EX1:


// Viết một ứng dụng C/R/U/D
// C ---  Cho người dùng nhập vào tên mới
//   ---  Tiến hành kiểm tra xem tên đã tồn tại trong phoneList hay chưa
//      ---  Nếu có rồi in ra "Already existed in phone list"
//      ---  Nếu chưa có --> cho người dùng nhập vào số điện thoại mới
//      ---  In ra toàn bộ contact trong phone list theo dạng
//      ---  1. Peter Parker -- 0973712385
//      ---  2. Tony Stark -- 0973732385

// R ------  In ra toàn bộ contact trong phone list theo dạng
//      ---  1. Peter Parker -- 0973712385
//      ---  2. Tony Stark -- 0973732385

// U ---  Cho người dùng nhập vào tên của contact muốn sửa
//   ---  Tiến hành kiểm tra xem tên đã tồn tại trong phoneList hay chưa
//      ---  Nếu chưa có in ra "Not existed in phone list"
//      ---  Nếu có --> cho người dùng nhập vào số điện thoại mới update
//      ---  In ra toàn bộ contact trong phone list theo dạng
//      ---  1. Peter Parker -- 0973712385
//      ---  2. Tony Stark -- 0973732385

// U ---  Cho người dùng nhập vào tên của contact muốn xoá
//   ---  Tiến hành kiểm tra xem tên đã tồn tại trong phoneList hay chưa
//      ---  Nếu chưa có in ra "Not existed in phone list"
//      ---  Nếu có --> Tiến hành xoá contact ra khỏi phoneList
//      ---  In ra toàn bộ contact trong phone list theo dạng
//      ---  1. Peter Parker -- 0973712385
//      ---  2. Tony Stark -- 0973732385

// E ---  Biến chương trình thành một vòng lặp vĩnh cửu. Khi người dùng
//        Bấm E thì dừng chương trình

// let phoneList = [
//     {
//         id: 1,
//         name: "Peter Parker",
//         phone: "0973712385",
//     },
//     {
//         id: 2,
//         name: "Tony Stark",
//         phone: "0973322385",
//     }
// ];

// let userInput = prompt('C/R/U/D').toUpperCase();
// if (userInput == 'C'){
//     let newName = prompt('Nhập tên mới');

//     for (i = 0; i < phoneList.length; i++) {
//         if(newName == phoneList[i].name) {
//             alert('Already existed in phone list')
//             break;
//         } 
//     }
//     if(newNa) {
//         let a = {
//             id: phoneList.length + 1,
//             name: newName,
//             phone: prompt('Nhập SĐT'),
//         }
//         phoneList.push(a)
//         break;
//     }
// }
// console.log(phoneList)


// for (i = 0; i < phoneList.length; i++) {
//     console.log(`${phoneList[i].id}. ${phoneList[i].name} --- ${phoneList[i].phone}`);
// }


// for (let key in phoneList) {
//     console.log(phoneList[key])
// }
