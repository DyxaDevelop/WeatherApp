function showWeather() {
    let city = document.querySelector('#city').value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f9b5c4c1ac0903a19c58fd751f62e954`, {
        method: "GET",
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            console.log(data.cod);
            document.querySelector('.out').innerHTML = data;
        })
    // .catch(function (response) {
    //     console.log(1);
    // })
}
document.querySelector('button').onclick = showWeather;