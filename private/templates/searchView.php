<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>NUSRiders - Search</title>
    <!-- META -->
    <link href="./css/layout.css" type="text/css" rel="stylesheet" />
    <link href="./css/field.css" type="text/css" rel="stylesheet"/>
    <link href="./css/search.css" type="text/css" rel="stylesheet"/>
    <link href="./css/cardStyle.css" type="text/css" rel="stylesheet"/>
    <link href="./css/listStyle.css" type="text/css" rel="stylesheet"/>
    <!-- STYLES -->
  </head>
  <body>
    <div id="sbox">
      <div id="logout" onclick="location.href='./index.php'">logout</div>
      <h1>SEARCH</h1>
      <div id="sbox-fields">
        <input id="pac-input-A" class = "input" type="search" placeholder="From" />
        <input id="pac-input-B" class = "input" type="search" placeholder="To" />
        <a href="javascript:NewCal('pac-input-DT','ddmmmyyyy',true,24)">
          <input id="pac-input-DT" class="input" type="text" placeholder="dd-MMM-yyyy hh:mm:ss">
        </a>
      </div>
      <div class="profileBtn" onclick="location.href='./user.php?user=<?php echo $_SESSION["email"] ?>'">
        <img src="./img/userIcon.png" alt="profile" width="25px" height="25px">
        <?php echo $_SESSION["username"] ?>
      </div>
    </div>
    <div id="list" class="list">

    </div>
  </body>
  <script src="./js/datetimepicker.js"></script>
  <script src="./js/cardList.js"></script>
  <script src="./js/googleUtils.js"></script>
  <!-- load libraries -->
  <script src="./js/search.js"></script>
  <!-- load page main method -->
  <script src="https://maps.googleapis.com/maps/api/js?callback=init&libraries=places"
      async defer></script>
  <!-- load google maps api -->
</html>
