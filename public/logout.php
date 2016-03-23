<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>

    <?php
    session_start();

    phpAlert($_SESSION['username']);
    // test to check session is valid
    $_SESSION = array();
    session_destroy();
    //header('Location: ./index.php');

    function phpAlert($msg) {
        echo '<script type="text/javascript">alert("' . $msg . '")</script>';
    }
    ?>

  </body>
</html>
