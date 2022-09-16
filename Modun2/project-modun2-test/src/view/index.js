import { loginPage } from "../page/login-page/index";
import { chatsPage } from "../page/chats-page/index";
import { registerPage } from "../page/register-page/index";
import { resetPasswordPage } from "../page/reset-password-page/index";
import { validateLoginInfo } from "../controller/index";
export let setActiveScreen = (screenName) => {
  let app = document.getElementById("app");
  switch (screenName) {
    case "registerPage":
      if (app) {
        app.innerHTML = registerPage;
      }
      const loginForm = document.getElementById("login-form");
      console.log(loginForm);
      if (loginForm) {
        // console.log(loginForm);
        loginForm.addEventListener("submit", (event) => {
          event.preventDefault();
          const email = loginForm.email.value;
          const password = loginForm.password.value;
          const lastName = loginForm.lastName.value;
          const firtName = loginForm.firtName.value;
          const cpassword = loginForm.cpassword.value;

          console.log(email);
          console.log(password);
          console.log(lastName);

          // Controller làm nhiệm vụ validate thông tin
          // tạo hàm validateLoginInfo nhận vào email và password trong Controller
          // export hàm validateLoginInfo
          // import hàm validateLoginInfo trong view
          // trong screen login, gọi hàm validateLoginInfo sẽ là kiểm tra xem
          // có phải email hợp lệ không, có bỏ trống trường nào không

          // tạo một hàm setMessage ở view và export sang Controller để in ra lỗi
          // từ nhưng trường hợp validate đó

          // làm giống hệt các bước trên với những màn resetPasswordPage và register

          validateLoginInfo(email, password, lastName, firtName, cpassword);
        });
      }
      break;

    default:
      break;
  }
};
export let renderErrorMessage = (id, text) => {
  const errorMessage = document.getElementById(id);
  if (errorMessage) {
    errorMessage.innerText = text;
  }
};
