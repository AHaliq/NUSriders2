<?php
define('INCLUDE_CHECK',true);

if($_POST['submit']) {
  $thing = $_POST['email'];
    echo "<script type='text/javascript'>alert('$thing');</script>";
  $email = strip($_POST['email']);
  $password = md5(strip($_POST['password']));
  // parse user input
  require '../private/php/connect.php';
  // connect to database
  $message = "hi";
  if($_POST['submit'] == "Login") {
  // login button event
    $row = pg_fetch_assoc(pg_query("
      SELECT email, username, password
      FROM users
      WHERE email = '{$email}' AND password = '{$password}'
    "));
    // query if email password combo exists
    if($row['email']) {
      $message = "SUCESS";
      // user exists
    }else {
      $username = strip($_POST['name']);
      $message = "FAIL TO LOGIN";
      // user does not exist
    }
  }else if($_POST['submit'] == "Register") {
  // register button event
    $message = "APER KO BUAT";
  }
  echo "<script type='text/javascript'>alert('$message');</script>";
}
// SUBMIT CONTROLLER ----------------------------------------------------------

/*
Remove characters to prevent sql injection
@param  txt:String  raw string to process
*/
function strip($txt) {
  return pg_escape_string(stripslashes(strip_tags($txt)));
}

// METHODS
// ============================================================================

include '../private/templates/loginView.php';
// RENDER VIEW ----------------------------------------------------------------
?>
