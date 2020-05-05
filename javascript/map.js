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

var lon;

var lat;

function getLinkJson(url){

    fetch(url)
    .then(result => result.json())
    .then(info => {
        lon = info[0].lon,
        lat = info[0].lat

        document.getElementById("latitude").value = lat;
        document.getElementById("longtitude").value = lon;

        setMarker(lat, lon);

        console.log(lon, lat);

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





// opretter en ny instans af standard klassen XMLHttpRequest. Denne klasse bruges til kommunikere med en ekstern side.
var xhttp = new XMLHttpRequest();
// her laves den function, som bliver kaldt når XMLHttpRequest har modtaget svar fra ekstern side 
xhttp.onreadystatechange = function(){ 
    //Her checkes for status og readystate. this referrer til xhttp objektet.
    if(this.readyState == 4 && this.status == 200){

        //her parses den json tekst som er modtaget til et javascript objekt. (det kommer an på om du vil returnere noget fra din php side.. Men du kan også bruge xhttp.responseText til at ”debugge” hvad der sker på server-side
        var obj = JSON.parse(xhttp.responseText); 
        
    }
};
// her sættes url’en og argument og værdierne til GET request
xhttp.open('GET', "[handler.php]?latitude=" + lat + "&longtitude=" + lon, true); 
// her sendes request’en afsted
xhttp.send(); 
