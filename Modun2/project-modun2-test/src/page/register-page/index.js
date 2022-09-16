import "./style.css";
import img from "./picture/rikkei1.jpg";
export var registerPage = /*html*/ `
    <div class="overlay">
    <form>
    <div>
        <img src="${img}" alt="" />
    </div>
    <div class="con">
        <header class="head-form">
        <b>Create new account</b>
        </header>
        <div class="field-set">
        <h4>First Name</h4>
        <input
            class="form-input"
            type="text"
            placeholder="Please enter your first name"
        />
        <br />
        <br />
        <h4>Last Name</h4>
        <input
            class="form-input"
            type="text"
            placeholder="Please enter your last name"
        />
        <br />
        <br />
        <h4>Emiail address</h4>
        <input
            class="form-input"
            type="email"
            placeholder="Please enter your email"
        />
        <br />
        <br />
        <h4>Confirm Password</h4>
        <input
            class="form-input"
            type="text"
            placeholder="Please enter your Password"
        />
        <br />
        <br />
        <button class="">Register</button>
        </div>
    </div>
    </form>
    </div>
`;
