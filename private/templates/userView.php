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
      <img src="./img/userIcon.png" alt="userimg" width="150px" height="150px">
      <h1><?php echo $_SESSION['pg_username'] ?></h1>
      <?php if($_SESSION['pg_ownself'])
        echo "<div id='pbox-curr'>".$_SESSION['pg_currency']."</div>";
      ?>
    </div>
    <div id="subnav">
      <div class="subnav-btn subnav-btn-active">ROUTES</div>
      <div class="subnav-btn">PENDING RIDES</div>
      <?php if($_SESSION['pg_ownself'])
        echo '<div class="subnav-btn">COMPLETED RIDES</div>';
      ?>
    </div>
    <div id="list" class="list">

    </div>
  </body>
</html>
