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
    <div id="pbox">
      <div id="logout" onclick="location.href='./index.php'">logout</div>
      <img src="./img/userIcon.png" alt="userimg" width="150px" height="150px">
      <h1><?php echo $_SESSION['pg_username'] ?></h1>
      <?php if($_SESSION['pg_ownself'] || $_SESSION['isadm'])
        echo "<div id='pbox-curr'>".$_SESSION['pg_currency']."</div>";
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
      <?php if(!isset($_GET['pg_view']) || $_GET['pg_view']==1) { ?>
        lorem
      <?php }else if($_GET['pg_view']==2) {?>
        fokin
      <?php }else if($_GET['pg_view']==3) {?>
        ipsum
      <?php } ?>
    </div>
  </body>
  <script src="./js/listMaker.js"></script>
  <script src="./js/markerLoader.js"></script>
  <script src="./js/entityMaker.js"></script>
  <script src="./js/datetimepicker.js"></script>
  <script src="./js/googleUtils.js"></script>
  <!-- load libraries -->

  <!-- load page main method -->
  <script src="https://maps.googleapis.com/maps/api/js?callback=init&libraries=places"
      async defer></script>
  <!-- load google maps api -->
</html>
