<!DOCTYPE html>
<html>
<head>
	
	<title>Basis design</title>

	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	
	<link rel="shortcut icon" type="image/x-icon" href="docs/images/favicon.ico" />

    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==" crossorigin=""/>
    <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js" integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew==" crossorigin=""></script>

    <link rel="stylesheet" type="text/css" href="css/map.css">
      
</head>
<body>

<div id="address_container">

    <form id="address_form" action="#" onsubmit="return getData();">

        <input type="text" id="company" name="" placeholder="Firmanavn"><br>

        <input type="text" id="address" name="" placeholder="Adresse"><br>

        <input type="text" id="post" name="" placeholder="Postnr">

        <input type="text" id="city" name="" placeholder="By"><br>

        <input type="submit" id="submit" value="Tilføj"><br>

    </form>

    <div id="json_test"></div>

</div>

<div id="map"></div>

<script src="javascript/map.js"></script>

</body>
</html>