<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,height=device-height,initial-scale=1.0" />
    <script
      src="https://kit.fontawesome.com/64d58efce2.js"
      crossorigin="anonymous"
    ></script>
    <title>AI4Covid-19 System</title>
	<link rel="stylesheet" href="cs/styleUser.css" />
  </head>
  <body>
    <?php
    if (isset($_GET['login'])) {
      echo"<script>alert('".$_GET['msg']."');</script>";
    }
    ?>
    <div class="container">
      <div class="forms-container">
        <div class="signin-signup">
          <!--Login Form-->
          <form name="form" method="post" action="login_user.php" class="sign-in-form">
            <h2 class="title">Sign in</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" name="staffID" placeholder="Username" />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" name="password" placeholder="Password" />
            </div>
            <input type="submit" name="login" class="btn" value="login" />
          </form>

          <!--Sign Form-->
          <form name="form" method="post" action="signup_user.php" class="sign-up-form">
            <h2 class="title">Sign up</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" name="staffName" placeholder="Full Name" required="required"/>
            </div>
             <div class="input-field">
              <i class="fas fa-user-circle"></i>
              <input type="text" name="staffID" placeholder="Username" />
            </div>
            <div class="input-field">
              <i class="fas fa-envelope"></i>
              <input type="email" name="email" placeholder="Email" />
            </div>
            <div class="input-field">
              <i class="fas fa-phone"></i>
              <input type="number" name="nophone" placeholder="No Phone" />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" name="password" placeholder="Password" required="required" />
            </div>
            <input type="submit" name="submit" class="btn" value="Sign up" />
          </form>
      <?php
      if(isset($_GET['signup'])){
        echo"<script>alert('".$_GET['message']."');</script>";
      }
      ?>

        </div>
      </div>

      <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <h3>New here ?</h3>
			<br>
			</br>
            <button class="btn transparent" id="sign-up-btn">Sign up</button>
          </div>
		  
          <img src="img/signin.svg" class="image" alt="" >
        </div>
        <div class="panel right-panel">
          <div class="content">
            <h3>One of us ?</h3>
			<br>
			</br>
            <button class="btn transparent" id="sign-in-btn">Sign in</button>
          </div>
		  
          <img src="img/signup.svg" class="image" alt="" />
        </div>
      </div>
    </div>

    <script src="app.js"></script>
  </body>
</html>
