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

        setMarker(lat, lon);

        company = document.getElementById("company");
        address = document.getElementById("address");
        post = document.getElementById("post");

        // opretter en ny instans af standard klassen XMLHttpRequest. Denne klasse bruges til kommunikere med en ekstern side.
        var xhttp = new XMLHttpRequest();
        // her laves den function, som bliver kaldt når XMLHttpRequest har modtaget svar fra ekstern side 
        xhttp.onreadystatechange = function(){ 
            //Her checkes for status og readystate. this referrer til xhttp objektet.
            if(this.readyState == 4 && this.status == 200){
                //her parses den json tekst som er modtaget til et javascript objekt. (det kommer an på om du vil returnere noget fra din php side.. Men du kan også bruge xhttp.responseText til at ”debugge” hvad der sker på server-side
                // var obj = JSON.parse(xhttp.responseText); 
                // console.log(obj);
            }
        };

        getURL = "handlers/insert.php?latitude=" + lat + "&longtitude=" + lon + "&company=" + company.value + "&address=" + address.value + "&post=" + post.value;

        // her sættes url’en og argument og værdierne til GET request
        xhttp.open('GET', getURL, true); 
        // her sendes request’en afsted 
        xhttp.send();
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

/**
 * A function that uses a URL to get latitude and longtitude
 * then uses setMarker() as it cycles through all the info available.
 * 
 * @param {*} url 
 */
function setCompanyMarkers(url){

    fetch(url)
    .then(result => result.json())
    .then(info => {


        for( var i = 0; i < info.length; i++){

            lon = info[i].lng;
            lat = info[i].lat;
            name = info[i].name;
            address = info[i].address;

            var marker = L.marker([lat, lon]).addTo(mymap);

            marker.bindTooltip("<b>" + name + "</b>" + "<br>" + address + "<br>",{
                interactive: true, 
                permanent: false, 
                direction: 'top',
                className: ''
            });

        }

        // opretter en ny instans af standard klassen XMLHttpRequest. Denne klasse bruges til kommunikere med en ekstern side.
        var xhttp = new XMLHttpRequest();

        // her laves den function, som bliver kaldt når XMLHttpRequest har modtaget svar fra ekstern side 
        xhttp.onreadystatechange = function(){ 

            //Her checkes for status og readystate. this referrer til xhttp objektet.
            if(this.readyState == 4 && this.status == 200){
                //her parses den json tekst som er modtaget til et javascript objekt. (det kommer an på om du vil returnere noget fra din php side.. Men du kan også bruge xhttp.responseText til at ”debugge” hvad der sker på server-side
                // var obj = JSON.parse(xhttp.responseText); 
                // console.log(obj);
            }
        };

    })
    .catch(err => { throw err });
}

document.addEventListener('DOMContentLoaded', function(){
    
    setCompanyMarkers("handlers/readall.php");

})
  

