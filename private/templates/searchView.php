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
    <div class="sbox">
      <h1>SEARCH</h1>
      <input id="pac-input-A" class = "input" type="search" placeholder="From" />
      <input id="pac-input-B" class = "input" type="search" placeholder="To" />
      <a href="javascript:NewCal('pac-input-DT','ddmmmyyyy',true,24)">
        <input id="pac-input-DT" class="input" type="text" placeholder="dd-MMM-yyyy hh:mm:ss">
      </a>
    </div>
    <div id="list" class="list">

    </div>
  </body>
  <script src="./js/listMaker.js"></script>
  <script src="./js/markerLoader.js"></script>
  <script src="./js/entityMaker.js"></script>
  <script src="./js/datetimepicker.js"></script>
  <script src="./js/googleUtils.js"></script>
  <!-- load libraries -->
  <script src="./js/search.js"></script>
  <!-- load page main method -->
  <script src="https://maps.googleapis.com/maps/api/js?callback=init&libraries=places"
      async defer></script>
  <!-- load google maps api -->
</html>
