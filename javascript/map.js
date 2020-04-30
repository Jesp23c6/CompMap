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


let url = 'https://nominatim.openstreetmap.org/search?q=%22Ejlskovsgade%203%205000%20denmark%22&format=json';

var lon = "";
var lat = "";

function getLinkJson(url){

    fetch(url)
    .then(result => result.json())
    .then(info => {
        // lon = info[0].lon,
        // lat = info[0].lat
        data = [info[0].lat, info[0].lon];
        //console.log("lon: ", lon, ", ", "lat: ", lat);
    })
    .catch(err => { throw err });

    return data;
}

var test = getLinkJson(url);

console.log(test);