<?php
define('INCLUDE_CHECK',true);

session_start();

if($_SESSION['username']) {}else {
  header("Location: ./index.php");
}
// invalid entry without logging in

require '../private/php/connect.php';
// connect to database
//detect if POST called or default load
$dt = $_POST['dt'];
$rows = pg_fetch_all(pg_query("
SELECT * FROM route
"));
// DBCONNECT Query all da bitches (DEFAULT)
// DBCONNECT on POST(A, B, DT) do pyth search query
// echo generate addEntity in list

include '../private/templates/searchView.php';
// RENDER VIEW ----------------------------------------------------------------
?>
