let form = document.getElementById('form');

// lấy giá trị thông qua name của input
console.log(form.email.value);
form.password.value;

// submit event 
form.onsubmit = function(event) {
    event.preventDefault();
    //logic
    console.log('hellp');
    let name = 'hoangduc@gmail.com'
    let pass = '123456'
    let inputName = form.email.value
    let inputPass = form.password.value
    if (inputName == ''){
        alert('trong')
        if (inputName != pass){
            alert('name')
        }
        
    }
    if (inputPass != pass){
        
    }
    if (inputName === name && inputPass === pass)
    alert('true')
    inputName.value = ''
    inputPass.value = ''
}


//EX
// tiến hành validate form
// khi người dùng không nhập vào email ---> hiển thị trên DOM một dòng text đỏ 'email không đc bỏ trống'
// khi người dùng không nhập vào password ---> hiển thị trên DOM dòng text đỏ 'Password không được bỏ trống'

//  khi người dùng nhập vào email và password đầy đủ, tiến hành kiểm tra 
//  với biến email và biến password đăkt sẵn trong file JS
//  nếu sai email ---> hiển thị ra text đỏ trong DOM 'sai email'
//  nếu sai password ---> hiển thị ra text đỏ trong DOM 'sai password'