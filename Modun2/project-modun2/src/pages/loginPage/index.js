let loginPage = /*html*/ `
    <div class="overlay">
      <!-- LOGN IN FORM by Omar Dsoky -->
      <form>
        <div>
          <img src="../picture/rikkei1.jpg" alt="" />
        </div>
        <!--   con = Container  for items in the form-->
        <div class="con">
          <!--     Start  header Content  -->
          <header class="head-form">
            <b>Sign in to Rikkei Chat</b>
            <!--     A welcome message or an explanation of the login form -->
          </header>
          <!--     End  header Content  -->
          <br />
          <div class="field-set">
            <!--   user name -->
            <!-- <span class="input-item">
              <i class="fa fa-user-circle"></i>
            </span> -->
            <!--   user name Input-->
            <h4>Email address</h4>
            <input
              class="form-input"
              id="txt-input"
              type="text"
              placeholder="Please enter your email"
              required
            />

            <br />
            <br />

            <!--   Password -->

            <!-- <span class="input-item">
              <i class="fa fa-key"></i>
            </span> -->
            <!--   Password Input-->
            <h4>Password</h4>
            <input
              class="form-input"
              type="password"
              placeholder="Please enter your password"
              id="pwd"
              name="password"
              required
            />

            <!--      Show/hide password  -->
            <!-- <span>
              <i
                class="fa fa-eye"
                aria-hidden="true"
                type="button"
                id="eye"
              ></i>
            </span> -->

            <br />
            <!--        buttons -->
            <!--      button LogIn -->
            <button class="log-in">Log In</button>
          </div>

          <!--   other buttons -->
          <div class="other">
            <!--      Forgot Password button-->
            <button class="btn submits frgt-pass">Forgot Password</button>
            <!--     Sign Up button -->
            <button class="btn submits sign-up">
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
