import { loginPage } from "../page/login-page/index";
import { chatsPage } from "../page/chats-page/index";
import { registerPage } from "../page/register-page/index";
import { resetPasswordPage } from "../page/reset-password-page/index";
export let setActiveScreen = (screenName) => {
  let app = document.getElementById("app");
  switch (screenName) {
    case "loginPage":
      if (app) {
        app.innerHTML = loginPage;
      }
      const loginForm = document.getElementById("login-form");
      console.log(loginForm);
      if (loginForm) {
        // console.log(loginForm);
        loginForm.addEventListener("submit", (event) => {
          event.preventDefault();
          const email = loginForm.email.value;
          const password = loginForm.password.value;
          console.log(email);
          console.log(password);
          validateLoginInfo(email, password);
        });
      }
      break;

    default:
      break;
  }
};
