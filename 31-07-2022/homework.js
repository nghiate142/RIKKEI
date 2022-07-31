// Bài 1: Nhập vào 2 số a và b, kiểm tra xem a có chia hết cho b hay k
    // code
        // let a = parseInt(prompt('Nhập vào số a'));
        // let b = parseInt(prompt('Nhập vào số b'));
        // let x = a % b;
        // if (x === 0) {
        //     alert('a chia hết cho b');
        // }
        // else {
        //     alert('a không chia hết cho b')
        // }




// Bài 2: Nhập tuổi và in ra kết quả nếu tuổi học sinh đó không đủ điều kiện vào học lớp 10
    // code
        // let a = parseInt(prompt('nhập số tuổi'));
        // if (a != 15) {
        //     alert('không đủ tuổi vào lớp 10');
        // }
        // else {
        //     alert('đủ điều kiện vào lớp 10');
        // }




// Bài 3: Nhập một số nguyên bất kỳ và in kết quả ra màn hình để nói cho người dùng biết số đó là lớn hay nhỏ hơn 0
    //code
        // let a = parseFloat(prompt('Nhập vào 1 số bất kỳ'));

        // switch (true) {
        //     case a < 0:
        //         alert('số ' + a + ' nhỏ hơn 0');
        //         break;

        //     case a > 0:
        //         alert('số ' + a + ' lớn hơn 0');
        //         break
        // }




//Bài 4: Nhập 3 số nguyên và tìm giá trị lớn nhất của ba số nguyên đó
    // code
    //     let a = parseFloat(prompt('Nhập số đầu tiên'));
    //     let b = parseFloat(prompt('Nhập số thứ 2'));
    //     let c = parseFloat(prompt('Nhập số thứ 3'));

    //    if (a > b && a > c) {
    //         alert(a + ' Là số lớn nhất');
    //    }
    //    else if (a < b && b > c) {
    //         alert(b + ' Là số lớn nhất')
    //    }
    //    else if (a < c && c > b) {;
    //         alert(c + ' Là số lớn nhất')
    //    }
    //         else {
    //         alert('3 số bằng nhau');
    //    }




//Bài 5: Xếp hạng học lực của học sinh dựa trên các điểm bài kiểm tra, điểm thi giữa kỳ, điểm thi cuối kỳ
    //code
        // let a = parseFloat(prompt('Điểm kiểm tra 1 tiết'));
        // let b = parseFloat(prompt('Điểm kiểm tra giữa kỳ'));
        // let c = parseFloat(prompt('Điểm kiểm tra cuối kỳ'));

        // let x = (a + (b * 2) + (c * 3)) / 6;
        // if (0 <= x && x < 5) {
        //     alert('học ngu vãi');
        // }
        // else if (5 <= x && x < 6.5) {
        //     alert('học lực trung bình');
        // }
        // else if (6.5 <= x && x <8) {
        //     alert('Học lực khá (tiên tiến)');
        // }
        // else if (8 <= x && x <= 10) {
        //     alert('Học sinh giỏi');
        // }
        // else {
        //     alert('làm gì có cái điểm đấy');
        // }





//Bài 6: Tính hoa hồng nhận được tuỳ theo mức doanh số bán hàng
    //code 
        // let a = parseFloat(prompt('Nhập doanh số bán hàng'));
        // let x = a / 100 * 10;
        // alert('số tiền hoa hồng được nhận là: ' + x);





//Bài 7: Tính số cân nặng của cơ thể, Chỉ số khối cơ thể (Body mass index-BMI) là một thước đo sức khỏe dựa trên cân nặng và chiều cao. Nó được tính bằng cách lấy cân nặng
// đơn vị tính kilogam chia cho bình phương của chiều cao đơn vị tính mét. Công thức:
// bmi = weight / ( height ^ 2 ) Chỉ số BMI đối với người trên 20 tuổi được phân loại và diễn giải theo bảng sau:
// Ví dụ: Một người có cân nặng là 65Kg và chiều cao là 1.75m thì BMI là 65 / 1.752 = 22.22. Chỉ số này nằm trong khoảng 18.5 đến 25.0 cho nên được phân loại là Normal (bình thường).
// Khối lệnh để phân loại chỉ số cơ thể:
// Nếu dưới 18: “Thiếu cân”
// Nếu dưới 25: “Bình thường”
// Nếu dưới 30 cân: “Thừa cân”
// Còn lại: “Béo quá! Giảm cân đi”
    //code
        // let weight = parseFloat(prompt('Nhập cân nặng của mày vào (kg)'));
        // let height = parseFloat(prompt('Nhập thêm cái chiều cao nữa (met)'));
        // let BMI = weight / (height**2);
        //     console.log(BMI);
        // if (BMI < 18) {
        //     alert('Thiếu cân rồi đấy, ăn thêm vào');
        // }
        // else if (18 <= BMI && BMI < 25 ) {
        //     alert('cơ thể bình thường');
        // }
        // else if (25 <= BMI && BMI < 30) {
        //     alert('Thừa cân chút xíu thôi không sao đâu');
        // }
        // else {
        //     alert('béo quá rồi đấy! giảm cân nhanh còn kịp');
        // }