import "./style.css";
import img from "./picture/rikkei1.jpg";
export var registerPage = /*html*/ `
    <div class="overlay">
    <form id="login-form">
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
            name="firtName"
            class="form-input"
            type="text"
            placeholder="Please enter your first name"
            
        />
        <div id= "erro-firtName"></div>
        <br />
        <br />
        <h4>Last Name</h4>
        <input
            name="lastName"
            class="form-input"
            type="text"
            placeholder="Please enter your last name"
            
        />
        <div id= "erro-lastName"></div>
        <br />
        <br />
        <h4>Email address</h4>
        <input
            name="email"
            class="form-input"
            type="email"
            placeholder="Please enter your email"
            
        />
        <div id= "erro-email"></div>
        <br />
        <br />
        <h4> Password</h4>
        <input
            name="password"
            class="form-input"
            type="text"
            placeholder="Please enter your Password"
            
        />
        <div id= "erro-password"></div>
        <br />
        <br />
        <h4>Confirm Password</h4>
        <input
            name="cpassword"
            class="form-input"
            type="text"
            placeholder="Please enter your Password"
            
        />
        <div id= "erro-confirmPassword"></div>
        <br />
        <br />
        <button class="">Register</button>
        </div>
    </div>
    </form>
    </div>
`;
