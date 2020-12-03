
const key = "f5bfb48c799acb18734e01392cc425d7"


window.addEventListener('load', () => {
    let lon;
    let lat;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            lon = position.coords.longitude;
            lat = position.coords.latitude;
            let API = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${key}`;

            fetch(API)
                .then(Response => {
                    return Response.json();
                })
                .then(data => {
                    addData(data);
                    function printIcon(icon, type, disc) {
                        HTML = `<img src="./img/weather/${icon}@2x.png" alt=" icon">`
                        return document.querySelector('.icon').innerHTML = HTML;
                    }
                })
        })
    }
});

$("button").click(function () {
    let city = $('input').val();
    let API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`
    fetch(API)
        .then(Response => {
            return Response.json();
        })
        .then(data => {

            addData(data);
        })
});


function addData(data) {
    if (data.cod != 404 && data.cod != 400) {
        document.querySelector(".city-name").innerHTML = data.name;
        document.querySelector(".temp-deg").innerHTML = data.main.temp + "C";
        document.querySelector(".feels-temp").innerHTML = "feels like: " + data.main.feels_like + " C";
        printIcon(data.weather[0].icon, data.weather[0].main, data.weather[0].description);
        document.querySelector(".temp-text").innerHTML = data.weather[0].description;
    }
    else {
        document.querySelector(".city-name").innerHTML = data.message;
        document.querySelector(".temp-deg").innerHTML = "";
        document.querySelector(".feels-temp").innerHTML = "";
        document.querySelector(".temp-text").innerHTML = "";
        deleteIcon();

    }

}
function printIcon(icon) {
    HTML = `<img src="./img/weather/${icon}@2x.png" alt=" icon">`
    return document.querySelector('.icon').innerHTML = HTML;
}

function deleteIcon() {
    HTML = ``
    return document.querySelector('.icon').innerHTML = HTML;
}
