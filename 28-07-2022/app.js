// 1.	Khai báo biên (khởi tạo)
// -	Từ khoá + tên biến = giá trị khởi tạo
// -	Từ khoá : var/let/const
// Vd: 
// 	let name = “peter”;
// 	Var age = “18”;
// Const gender = “male”;

// 2.	Phép gán
// vd: Trong tương lai không xa nào đó, mình muốn tuổi peter lên 20
// age = 20;
// 3.	Câu lệnh in ra màn hình console (output)
// console.log(“Hello word”);
// 4.	Câu lệnh nhập input từ user
// Promt(“Nhập số tuổi của bạn”);
// 		let username = promt(“nhập tên của bạn”);
// Sau đó username sẽ được gán là ký tự trong “”
// 		console.log(username);
// 	Vd: in ra màn hình hộp điều 2 số và tính tổng 2 số đó
// 	Cách 1:
// 		let a = parseInt(prompt(“nhập vào số nguyên a”));
// 		let b = parseInt(prompt(“nhập vào số nguyên b”));
// 		let x = a + b;
// 		console.log(“kết qua của”, x, “là”);
// 	Cách 2:
// 		let a = prompt(“nhập vào số nguyên a”);
// 		let b = prompt(“nhập vào số nguyên b”);
// 		let x = Number(a) + Number(b);
// 		console.log(“kết qua của”, x, “là”);
// 5.	Kiểu dữ liệu (data types)
// -	Primitive: dữ liệu nguyên thuỷ
// o	String (chuỗi), Number (số), Bloolean (true,false), Null, underfined,…
// -	Object: kiểu dữ liệu đối tượng
// o	Array (mảng), Object (đối tượng), Function (Hàm)
// 5.1: String
// - khai báo biến có kiểu dữ liệu là String
// 	Vd1:
// 		// qoutes
// 		let name 	= “Đức”;
// 		let job = “IT”;
// 		// backticks
// 		let company = “tự do”;
// 		// nối chuỗi (String concatenation)
// 		console.log(name +  “ ” + job);
// 	Vd2:
// 		let name = “”;
// 		let age = “”;
// 		let job = “”;
// 		let company = ::;
// 		console.log(name + “ “ + age + “ “ + job + “ ” + company);

// 	Vd3:
// 		let name = prompt(“nhập tên của bạn”);
// 		let a = Hello
// 		console.log(a + name)

// 	vd4:
// 		console.log( "Trưa nay nắng! Mặt trời gay gắt! \n Bà lão bước chân khập khiễng đi \n Cặp vé số sao nằng nặng quá! \n Bao giờ được nghỉ tuổi về già?");
		
// 	vd5:
// 		let name = "Đức";
// 		let age = 18;
// 		let school = "Rikker";
		
// 		console.log(`${name} is ${age} and ${name} goes to school at ${school}`);

// 	// built-in function (hàm có sẵn)
	
// 5.1 Number (số)
// 	vd1:
// 		let number = 10;
// 		let number2 = 20;
// 		console.log(number);
	
// 	// Algorimic Operators (Toán tử)
// 	console.log(10 + 20);
// 	// các dấu (+), (-), (*), (/)
// 				%: chia lấy dư
// 				**: Mũ
// 	//Math Object (xử lý các phép tính toán trong toán học)
	
// Bài tập:

// 	bài 1:Trong Javascript, trong trường hợp nào khi bạn đặt tên biến thì sẽ bị thông báo SyntaxError ? Cho 3 ví dụ về việc đặt tên biến sai trong Javascript?
	
// 	TH1: trùng tên biến
// 		let alo = '';
// 		let alo = '';
		
// 	TH2: biến có số ở trước
// 		let 2alo = '';
// 	TH3: biến có dấu cách
// 		let abc alo = '';
		
// 	Bài 2:Khai báo các biến sau
// 	a,	Một biến có tên là msg có giá trị (value) là một string có nội dung  ‘Rikkei is awesome’, sau đó in nó ra màn hình console
// 	b,	Một biến có tên là studentCount có giá trị (value) là một số 0. Sau đó in nó ra màn hình console
		
// 		a,
// 			let msg = Rikkei is awesome;
// 			console.log(msg);
// 		b,
// 			let studentCount = 0;
// 			console.log(studentCount);
	
// 	Bài 3:Gán lại giá trị cho các biến đã được khai báo ở phía trên
// 	a,	Thay đổi giá trị của msg thành ‘Coding is hard but super cool and fun’, sau đó lại in nó ra màn hình console
// 	b,	Đối với biến studentCount, giả sử số lượng sinh viên đang là 30 → update biến studentCount thành 30 và in nó ra màn hình console
// 	c,	search cách để biến một chuỗi thành viết hoa toàn bộ (upper case), viết thường toàn bộ (lower case). Biến đổi chuỗi msg thành dạng viết hoa toàn bộ → In nó ra màn hình console
// 	d,	Google search cách để tăng một biến kiểu số lên n đơn vị → Thực hiện cho người dùng nhập vào số n, sau đó tăng biến studentCount lên n đơn vị và in nó ra màn hình console

// 		a,
// 			let msg = "Coding is hard but super cool and fun";
// 			console.log(msg);
// 		b,	
// 			let studentCount = 30;
// 			console.log(studentCount);
// 		c,	
// 			let abc = msg.toUpperCase(); (Viết hoa toàn bộ ký tự)
// 			console.log(abc);
// 			let abc = msg.toLowerCase(); (Viết thường toàn bộ ký tự)
// 			console.log(abc);

// 	Bài 4:Google search về câu lệnh alert trong Javascript → Show cho người dùng một tin nhắn đáng yêu nào đó
		
// 			alert("viết 1 cái gì đó);
			
// 	Bài 5: Viết một đoạn mã hỏi tên người dùng, sau đó chào họ và nói gì đó đáng yêu với họ

// 			prompt("bạn tên là gì?);
// 			alert("tôi muốn nói là bạn thật sự đẹp");
			
// 	Bài 6: Viết một đoạn mã hỏi người dùng firstName và lastName, sau đó chào họ với tên đầy đủ của họ

// 		let firstName = prompt("Cho xin cái họ");
// 		let middleName = prompt("Cho xin cái tên đệm");
// 		let lastName = prompt("xin nốt cái tên đê");
// 		console.log(`${firstName} ${middleName} ${lastName}`);
		
// 	Bài 7:Viết một đoạn mã cho người dùng nhập vào 1 cạnh của hình vuông, tính và in ra diện tích hình vuông đó (sử dụng câu lệnh alert)
	
// 		alert("tính diện tích hình vuông nhá");
// 		let x = parseInt(prompt(độ dài của cạnh là bao nhiêu));
// 		let s = x * x;
// 		alert('Diện tích hình chữ nhật là ' + s);
		
// 	Bài 8:Viết một đoạn mã cho người dùng nhập vào bán kính của hình tròn, tính và in ra diện tích của hình tròn đó (sử dụng câu lệnh alert)
	
// 		alert('Tính diện tích hình tròn);
// 		let x = parseInt(prompt('Nhập bán kính hình tròn'));
// 		let s = Math.PI * x**2;
// 		alert(Diện tích hình tròn bằng: ' + s);
		
// 	Bài 9:Viết một đoạn script chuyển đổi từ độ Celsius (0C) sang độ Fahrenheit (0F)
// 		alert('chuyển từ độ C sang độ F');
// 		let c = parseFloat(prompt('nhập độ cần đổi');
// 		let f = c * 1.8 + 32;
// 		alert('nhiệt độ quy đổi ra độ f = ' + f);
		
// 	Bài 10: Alert lên câu “The quick ___ fox jumps over the ___ dog”. Cho người dùng nhập vào các từ cần điền vào dấu gạch chân. Sau đó alert ra câu đầy đủ (Sử dụng template string)
	
// 		alert("The quick ___ fox jumps over the ___ dog");
// 		let a = prompt("Điền từ vào khoảng trắng đầu tiên");
// 		let b = prompt("Điền từ vào khoảng trắng tiếp theo");
// 		alert(`${'the quick'} ${a} ${'fox jumps over the'} ${b} ${'dog"}`); 