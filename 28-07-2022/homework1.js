// Tính tổng điểm và điểm trung bình 3 môn học


let physics = parseInt(prompt('Nhập điểm môn Vật lý'));
let chemistry = parseInt(prompt('nhập điểm môn Hóa học'));
let biological = parseInt(prompt('nhập điểm môn Sinh học'));


let total = physics + chemistry + biological;
let medium = (physics + chemistry + biological) / 3;


// In ra màn hình 
document.write('Điểm môn Vật lý là: ' + physics + '</br>');
document.write('Điểm môn Hóa học là: ' + chemistry + '</br>');
document.write('Điểm môn Sinh học là: ' + biological + '<br>');
document.write('Tổng điểm ba môn học là: ' + total + '</br>');
document.write('Điểm trung bình ba môn học = ' + medium + '<br>');