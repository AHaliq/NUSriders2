<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>NUSRiders - Login</title>
  <!-- META -->
  <link href="./css/layout.css" type="text/css" rel="stylesheet"/>
  <link href="./css/login.css" type="text/css" rel="stylesheet"/>
  <link href="./css/field.css" type="text/css" rel="stylesheet"/>
  <!-- STYLES -->
  <link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet' type='text/css'>
  <!-- CDN IMPORTS -->
</head>
<body>
  <div class="loginBox">
    <div class="loginBox-greeter">NUSRiders</div>
    <form action="./index.php" method="post" accept-charset="utf-8">
      <div class="loginBox-fields">
        <input class="input" type="email" name="email" placeholder="Email" required />
        <input class="input" type="password" name="password" placeholder="Password" required />
        <input class="input" id="loginBox-nameField" type="text" name="name" placeholder="Username" required />
      </div>
      <div id="loginBox-error">
        <?php if($_SESSION['msg']) echo $_SESSION['msg']; ?>
      </div>
      <input id="loginBox-button" type="submit" name="submit" value="Login" />
    </form>
    <div class="loginBox-text">forget password?</div>
    <div id="reglogToggle" class="loginBox-text">Register</div>
  </div>
</body>

<script src="./js/login.js"></script>
<!-- load page main method -->
</html>
