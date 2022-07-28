let radius = parseFloat(prompt('Nhập bán kính hình tròn'));
let diameter = parseFloat(prompt('Nhập đường kính hình tròn'));
// Chu vi hình tròn khi có bán kính
let perimeter1 = radius * 2 * Math.PI;
// Chu vi hình tròn khi có đường kính
let perimeter2 = diameter * Math.PI;

document.write('Bán kính = ' + radius + ' thì chu vì hình tròn = ' + perimeter1 + '</br>');
document.write('Đường kính = ' + diameter + ' thì chu vì hình tròn = ' + perimeter2);