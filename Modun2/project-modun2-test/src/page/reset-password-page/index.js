import "./style.css";
import img from "./picture/rikkei1.jpg";
export var resetPasswordPage = /*html*/ `
    <div class="overlay">
    <form action="">
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
            class="form-input"
            type="email"
            id="txt-input"
            placeholder="Please enter your email"
            required
        />
        <br />
        <button class="log-in">Reset Password</button>
        </div>
    </div>
    </form>
    </div>
`;
