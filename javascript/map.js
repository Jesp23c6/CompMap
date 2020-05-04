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

//let url = 'https://nominatim.openstreetmap.org/search?q=%22Ejlskovsgade%203%205000%20denmark%22&format=json';

/**
 * 
 * @param {*} url 
 */
function getLinkJson(url){

    fetch(url)
    .then(result => result.json())
    .then(info => {
        lon = info[0].lon,
        lat = info[0].lat

        setMarker(lat, lon);

    })
    .catch(err => { throw err });
}

/**
 * 
 * @param {*} lat 
 * @param {*} lon 
 */
function setMarker(lat, lon){

    var marker = L.marker([lat, lon]).addTo(mymap);

}


function setUserMarker(){

    var company = document.getElementById("company");
    var address = document.getElementById("address");
    var post = document.getElementById("post");
    var city = document.getElementById("city");

    var address_array = address.split(" ");

    var url = "https://nominatim.openstreetmap.org/search?q=" + address_array[0] + address_array[1] + " " + post.value + " " + "denmark" + "%22&format=json";

    console.log(url, address.value, post.value);

}