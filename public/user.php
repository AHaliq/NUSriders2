<?php
define('INCLUDE_CHECK',true);

session_start();

require '../private/php/connect.php';
// connect to database

echo $_GET['user'];
echo $_SESSION['username'];
?>
