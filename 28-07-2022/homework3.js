// Tính diện tích hình tròn


let radius = parseFloat(prompt('Nhập bán kính hình tròn'));
let diameter = parseFloat(prompt('Nhập đường kính hình tròn'));

// Tính diện tích hình tròn khi biết bán kính
let area1 = Math.PI * radius**2;

// Tính diện tích hình tròn khi biết đường kính
let area2 = (diameter / 2)**2 * Math.PI; 

// In ra màn hình diện tích hình tròn
document.write('Diện tích hình tròn khi biết bán kính = ' + radius +' là: ' + area1 + '</br>');
document.write('Diện tích hình tròn khi biết đường kính = ' + diameter +' là: ' + area2);