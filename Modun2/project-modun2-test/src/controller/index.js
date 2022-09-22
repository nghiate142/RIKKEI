import { renderErrorMessage } from "../view/index";
import {
  authUser,
  createNewUser,
  LoginUser,
  saveMessage,
} from "../model/index";
export let validateLoginInfo = (
  email,
  password,
  lastName,
  firtName,
  cpassword
) => {
  //regex, regular expression
  // emmail regex
  const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email) {
    renderErrorMessage("erro-email", "Please enter your email");
  } else if (!emailRegex.test(email)) {
    renderErrorMessage("erro-email", "Invalid email");
  } else {
    renderErrorMessage("erro-email", "");
  }

  if (!password) {
    renderErrorMessage("erro-password", "Please enter your password");
  } else {
    renderErrorMessage("erro-password", "");
  }
  if (!firtName) {
    renderErrorMessage("erro-firtName", "Please enter your firt Name");
  } else {
    renderErrorMessage("erro-firtName", "");
  }
  if (!lastName) {
    renderErrorMessage("erro-lastName", "Please enter your last Name");
  } else {
    renderErrorMessage("erro-lastName", "");
  }
  if (!cpassword) {
    renderErrorMessage(
      "erro-confirmPassword",
      "Please enter your confirm Password"
    );
  } else {
    renderErrorMessage("erro-confirmPassword", "");
  }
  if (
    firtName &&
    lastName &&
    email &&
    password &&
    cpassword &&
    cpassword === password
  ) {
    createNewUser(firtName, lastName, email, password);
  }
};

export let validateChatForm = (content) => {
  if (content) {
    let message = {
      user: authUser.email,
      content: content,
      createAt: new Date().toISOString,
    };
    saveMessage(message);
  }
};
