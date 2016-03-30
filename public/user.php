<?php
define('INCLUDE_CHECK',true);

session_start();

if($_SESSION['username']) {}else {
  header("Location: ./index.php");
}
// invalid entry without logging in

require '../private/php/connect.php';
// connect to database

/** email of user's page */
$email =  $_GET['user'];
/** email of session user */
$emlSs =  $_SESSION['email'];

$row = pg_fetch_assoc(pg_query("
  SELECT email, username, currency
  FROM users
  WHERE email = '{$email}'
"));
// query if email is valid (not corrupt GET)
if($row['email']) {
  $_SESSION['pg_username'] = $row['username'];
  $_SESSION['pg_currency'] = $row['currency'];
  $_SESSION['pg_ownself'] = $email == $emlSs;
  include '../private/templates/userView.php';
  // generate in pending rides list
  // (book button if user != username)
  // (cancel button if user == username)
  // (show passengers if user == username || admin)
  // generate past rides list if user == username || admin

//TODO php select 3 different js inits based on GET variable
}else {
  echo "dier tak de";
  //TODO goto 404 page
}
//THERES no transaction detection.... ride complete detection... money transfer business....
?>
