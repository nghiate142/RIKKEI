// VD1:In ra màn hình 1 Array chứa tên của 3 cầu thủ bóng đá: Ronaldo, Messi, Neymar.
// Hỏi người dùng có muốn nhập thêm cầu thủ không bằng cách nhập "Y" hoặc "N".
// Nếu người dùng nhập "Y", hỏi tiếp tên cầu thủ muốn nhập, sau đó thêm cầu thủ mới vào Array ban đầu và in Array mới ra màn hình
// Nếu người dùng nhập "N", in ra màn hình câu "Good Bye!"
    //code
let arr = ['Ronaldo', 'Messi', 'Neymar'];
let user = prompt(arr + '\n' + 'Điền Y nếu muốn thêm tên cầu thủ. Nếu không điền N ').toLowerCase();
if(user === 'y'){
    let Input = prompt('Nhập tên cầu thủ');
    arr.push(Input);
    console.log(arr);
}
else{
    console.log('Good Bye')
}

