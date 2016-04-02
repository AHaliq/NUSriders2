<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>NUSRiders - Search</title>
    <!-- META -->
    <link href="./css/layout.css" type="text/css" rel="stylesheet" />
    <link href="./css/field.css" type="text/css" rel="stylesheet"/>
    <link href="./css/offer.css" type="text/css" rel="stylesheet"/>
    <link href="./css/cardStyle.css" type="text/css" rel="stylesheet"/>
    <link href="./css/listStyle.css" type="text/css" rel="stylesheet"/>
    <!-- STYLES -->

  </head>
  <body>
    <div class="box">
      <div id="logout" onclick="location.href='./index.php'">logout</div>
      <div id="back" onclick="location.href='./search.php'">back to search</div>
      <h1>OFFER</h1>
    </div>
    <div id = "mapO"></div>
    <div id="ofForm">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
    <div id="createBtn">
      MAKE OFFER
    </div>
  </body>
  <script src="./js/cardList.js"></script>
  <script src="./js/googleUtils.js"></script>
  <!-- load libraries -->
  <script src="./js/offer.js"></script>
  <!-- load page main method -->
  <script src="https://maps.googleapis.com/maps/api/js?callback=init&libraries=places"
      async defer></script>
  <!-- load google maps api -->
</html>
