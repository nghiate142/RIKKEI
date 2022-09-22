import "./style.css";
import img from "./picture/rikkei1.jpg";
export var resetPasswordPage = /*html*/ `
    <div class="overlay">
    <form id="login-form">
    <div>
        <img src="${img}" alt="" />
    </div>
    <div class="con">
        <header class="head-form">
        <b>Reset your password</b>
        </header>
        <br />
        <div class="field-set">
        <h4>Email address</h4>
        <input
            name="email"
            class="form-input"
            type="email"
            id="txt-input"
            placeholder="Please enter your email"
            required
        />
        <div id= "erro-email" class="error"></div>
        <br />
        <button class="log-in">Reset Password</button>
        </div>
    </div>
    </form>
    </div>
`;
