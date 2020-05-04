var mymap = L.map('map').setView([55.781582, 10.574432], 7);

var OpenStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        });
OpenStreetMap.addTo(mymap);

//Used to return user inputs with a console.log
function getData(){

    var company = document.getElementById("company");
    var address = document.getElementById("address");
    var post = document.getElementById("post");
    var city = document.getElementById("city");

    console.log(company.value + " " + address.value + " " + post.value + " " + city.value);

}

/**
 * A function that uses a URL to get latitude and longtitude
 * then uses setMarker()
 * 
 * @param {*} url 
 */
function getLinkJson(url){

    fetch(url)
    .then(result => result.json())
    .then(info => {
        lon = info[0].lon,
        lat = info[0].lat

        document.getElementById("latitude").innerText = lat;
        document.getElementById("longtitude").innerHTML = lon;

        setMarker(lat, lon);

    })
    .catch(err => { throw err });
}

/**
 * A function that uses two parameters to create a marker on the map.
 * 
 * @param {*} lat 
 * @param {*} lon 
 */
function setMarker(lat, lon){

    var marker = L.marker([lat, lon]).addTo(mymap);

}

/**
 * A function that takes the input data from the form
 * and uses it for an URL to grab JSON data with getLinkJson
 */
function setUserMarker(){

    var company = document.getElementById("company");
    var address = document.getElementById("address");
    var post = document.getElementById("post");
    var city = document.getElementById("city");

    var url = "https://nominatim.openstreetmap.org/search?q=" + address.value + " " + post.value + " " + "denmark" + "%22&format=json";

    getLinkJson(url);

}