<?php

if($_POST['submit'] == 'Login') {
  $username = strip($_POST['username']);
  $password = md5(strip($_POST['password']));
  $row = mysql_fetch_assoc(mysql_query("
    SELECT id,email
    FROM users
    WHERE email = '{$username}' AND password = '{$password}'
  "));
}
// CONTROLLER FOR USER ACTION ON LOGIN SUBMIT ---------------------------------

/*
Remove characters to prevent sql injection
@param  txt:String  raw string to process
*/
function strip($txt) {
  return mysqli_real_escape_string(stripslashes(strip_tags($txt)));
}

// METHODS --------------------------------------------------------------------

include '../private/templates/loginView.php'
// RENDER VIEW ----------------------------------------------------------------
?>
