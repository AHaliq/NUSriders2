<?php
define('INCLUDE_CHECK',true);

session_start();
$_SESSION = array();
// create session object

if($_POST['submit']) {
  $email = strip($_POST['email']);
  $password = md5(strip($_POST['password']));
  // parse user input
  require '../private/php/connect.php';
  // connect to database

  if($_POST['submit'] == "Login") {
    $row = pg_fetch_assoc(pg_query("
      SELECT email, username, password
      FROM users
      WHERE email = '{$email}' AND password = '{$password}'
    "));
    // query if email password combo exists
    if($row['email']) {
    // user exists
      gotoApplication($row['username'], $email);
    }else {
    // wrong credentials
      $_SESSION['msg'] = "invalid email or password";
    }
    // LOGIN BUTTON EVENT -----------------------------------------------------
  }else if($_POST['submit'] == "Register") {
    $username = strip($_POST['name']);
    // parse user input
    $row = pg_fetch_assoc(pg_query("
      SELECT email, username, password
      FROM users
      WHERE email = '{$email}'
    "));
    // query if email already registered
    if($row['email']) {
    // user already exists
      $_SESSION['msg'] = "email is already registered";
    }else {
    // able to create new user
      pg_query("
        INSERT INTO users (email, username, currency, password)
        VALUES ('{$email}', '{$username}', '$50', '{$password}')");
      gotoApplication($username, $email);
    }
    // REGISTER BUTTON EVENT --------------------------------------------------
  }
}
// CONTROLLER
// ============================================================================

/*
Remove characters to prevent sql injection
@param  txt:String  raw string to process
*/
function strip($txt) {
  return pg_escape_string(stripslashes(strip_tags($txt)));
}

/*
Take arguments as session variables and go to main application
*/
function gotoApplication($usr, $eml) {
  $_SESSION['username'] = $usr;
  $_SESSION['email'] = $eml;
  $_SESSION['isadm'] = $eml == "admin@gmail.com";
  // save session data
  header("Location: ./search.php");
  // go to application
}

// METHODS
// ============================================================================

include '../private/templates/loginView.php';
// RENDER VIEW ----------------------------------------------------------------
?>
