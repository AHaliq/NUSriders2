<?php
define('INCLUDE_CHECK',true);

session_start();

require '../private/php/connect.php';
// connect to database
//detect if POST called or default load
$dt = $_POST['dt'];
$rows = pg_fetch_all(pg_query("
SELECT * FROM route rt ride rd proposal p
WHERE rd.startDT < '$dt'
"));
// DBCONNECT Query all da bitches (DEFAULT)
// DBCONNECT on POST(A, B, DT) do pyth search query
// echo generate addEntity in list

include '../private/templates/searchView.php';
// RENDER VIEW ----------------------------------------------------------------
?>

<script>
 var session = eval('(<?php echo json_encode($_SESSION)?>)');
 console.log(session);

//TEST detect is admin
alert(session.isadm);
</script>
