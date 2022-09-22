import "./style.css";
import img from "./picture/rikkei1.jpg";
export var loginPage = /*html*/ `
    <div class="overlay">
    
    <form id="login-form">
    <div>
        <img src="${img}" alt="" />
    </div>
    
    <div class="con">
        <!--     Start  header Content  -->
        <header class="head-form">
        <b>Sign in to Rikkei Chat</b>
        
        </header>
        
        <br />
        <div class="field-set">
        
        <h4>Email address</h4>
        <input
        name="email"
            class="form-input"
            id="txt-input"
            type="text"
            placeholder="Please enter your email"
            
        />
        <div id= "erro-email" class="error"></div>

        <br />
        <br />

        
        <h4>Password</h4>
        <input
        name="password"
            class="form-input"
            type="password"
            placeholder="Please enter your password"
            id="pwd"
            
           
        />
        <div id= "erro-password" class="error"></div>

        

        <br />
        
        <button class="log-in">Log In</button>
        </div>

        <!--   other buttons -->
        <div class="other">
        <!--      Forgot Password button-->
        <button class="btn submits frgt-pass" id="forgot">Forgot Password</button>
        <!--     Sign Up button -->
        <button class="btn submits sign-up" id="signUp">
            Sign Up
            <!--         Sign Up font icon -->
            <i class="fa fa-user-plus" aria-hidden="true"></i>
        </button>
        <!--      End Other the Division -->
        </div>

        <!--   End Conrainer  -->
    </div>

    <!-- End Form -->
    </form>
    </div>
`;
