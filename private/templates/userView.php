<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>NUSRiders - <?php echo $_SESSION['pg_username']?></title>
    <!-- META -->
    <link href="./css/layout.css" type="text/css" rel="stylesheet" />
    <link href="./css/cardStyle.css" type="text/css" rel="stylesheet"/>
    <link href="./css/listStyle.css" type="text/css" rel="stylesheet"/>
    <link href="./css/user.css" type="text/css" rel="stylesheet" />
    <!-- STYLES -->
  </head>
  <body>
    <div class="box">
      <div id="logout" onclick="location.href='./index.php'">logout</div>
      <div id="back" onclick="location.href='./search.php'">back to search</div>
      <img src="./img/userIcon.png" alt="userimg" width="150px" height="150px">
      <h1><?php echo $_SESSION['pg_username'] ?></h1>
      <?php if($_SESSION['pg_ownself'] || $_SESSION['isadm'])
        echo "<div id='pbox-curr'>Wallet: ".$_SESSION['pg_currency']."</div>";
      ?>
    </div>
    <div id="subnav">
      <div
        class="subnav-btn <?php
          if(!isset($_GET['pg_view']) || $_GET['pg_view']==1) echo "subnav-btn-active"; ?>"
        onclick="location.href='./user.php?user=<?php echo $email?>&amp;pg_view=1'">
        ROUTES</div>
      <div
        class="subnav-btn <?php if($_GET['pg_view']==2) echo "subnav-btn-active"; ?>"
        onclick="location.href='./user.php?user=<?php echo $email?>&amp;pg_view=2'">
        PENDING RIDES</div>
      <?php if($_SESSION['pg_ownself'] || $_SESSION['isadm']) { ?>
        <div
          class="subnav-btn <?php if($_GET['pg_view']==3) echo "subnav-btn-active"; ?>"
          onclick="location.href='./user.php?user=<?php echo $email?>&amp;pg_view=3'">
          COMPLETED RIDES</div>
      <?php } ?>
    </div>
    <div id="list" class="list">

    </div>
  </body>
  <?php if(!isset($_GET['pg_view']) || $_GET['pg_view']==1) {
    if($email == $emlSs) { ?>
    <script>var tpe = 10;</script>
  <?php }else {?>
    <script>var tpe = 11;</script>
  <?php }}else if($_GET['pg_view']==2) {
    if($email == $emlSs) { ?>
    <script>var tpe = 20;</script>
  <?php }else {?>
    <script>var tpe = 21;</script>
  <?php }}else if($_GET['pg_view']==3 && $_SESSION['pg_ownself'] || $_SESSION['isadm']) {?>
    <script>var tpe = 3;</script>
  <?php }else { /*someone GET inject 3 even without permission, go to 404 */} ?>
  <!-- store pg_view into js -->
  <script src="./js/googleUtils.js"></script>
  <script src="./js/cardList.js"></script>
  <!-- load libraries -->
  <script src="./js/user.js"></script>
  <!-- load page main method -->
  <script src="https://maps.googleapis.com/maps/api/js?callback=init&libraries=places"
      async defer></script>
  <!-- load google maps api -->
</html>
