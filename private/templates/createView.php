<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>NUSRiders - Search</title>
    <!-- META -->
    <link href="./css/layout.css" type="text/css" rel="stylesheet" />
    <link href="./css/field.css" type="text/css" rel="stylesheet"/>
    <link href="./css/create.css" type="text/css" rel="stylesheet"/>
    <link href="./css/cardStyle.css" type="text/css" rel="stylesheet"/>
    <link href="./css/listStyle.css" type="text/css" rel="stylesheet"/>
    <!-- STYLES -->

  </head>
  <body>
    <div class="box">
      <div id="logout" onclick="location.href='./index.php'">logout</div>
      <div id="back" onclick="location.href='./search.php'">back to search</div>
      <h1>CREATE</h1>
      <div class="box-fields">
        <input id="pac-input-A" class = "input" type="search" placeholder="From" />
        <input id="pac-input-B" class = "input" type="search" placeholder="To" />
      </div>
    </div>
    <div id="mapR"></div>
    <div id="createBtn">
      CREATE ROUTE
    </div>
  </body>
  <script src="./js/cardList.js"></script>
  <script src="./js/googleUtils.js"></script>
  <!-- load libraries -->
  <script src="./js/create.js"></script>
  <!-- load page main method -->
  <script src="https://maps.googleapis.com/maps/api/js?callback=init&libraries=places"
      async defer></script>
  <!-- load google maps api -->
</html>
