const api_key = process.env.API_KEY;

document.querySelector('#getData').addEventListener('click', getData);

function getData(){

    let params = new URLSearchParams({
        access_key: api_key,
        query: 'Argentina',
        units: 'm'
    })


    fetch(`http://api.weatherstack.com/current?${params}`)
    .then((res) => res.json())
    .then((data) => {
            document.querySelector('.countryField').innerHTML = `${JSON.stringify(data.location.country)}`;
            document.querySelector('.humidityField').innerHTML = `${JSON.stringify(data.current.humidity)}%`;
            document.querySelector('.feelsLikeField').innerHTML = `${JSON.stringify(data.current.feelslike)} C°`;
            document.querySelector('.temperatureField').innerHTML = `${JSON.stringify(data.current.temperature)} C°`;
            document.querySelector('.descriptionField').innerHTML = `${JSON.stringify(data.current.weather_descriptions[0])}`;
            document.querySelector('.windSpeedField').innerHTML = `${JSON.stringify(data.current.wind_speed)} km/h `;
            document.querySelector('.windSpeedField').innerHTML += `Direction: ${JSON.stringify(data.current.wind_dir)}`;
        })
        .catch((err) => console.log(err))
}