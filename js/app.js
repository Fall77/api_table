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

        let params2 = new URLSearchParams({
            access_key: api_key,
            query: 'New York',
            units: 'm'
        })
    
        fetch(`http://api.weatherstack.com/current?${params2}`)
        .then((res) => res.json())
        .then((data) => {
                document.querySelector('.countryField2').innerHTML = `${JSON.stringify(data.location.country)}`;
                document.querySelector('.humidityField2').innerHTML = `${JSON.stringify(data.current.humidity)}%`;
                document.querySelector('.feelsLikeField2').innerHTML = `${JSON.stringify(data.current.feelslike)} C°`;
                document.querySelector('.temperatureField2').innerHTML = `${JSON.stringify(data.current.temperature)} C°`;
                document.querySelector('.descriptionField2').innerHTML = `${JSON.stringify(data.current.weather_descriptions[0])}`;
                document.querySelector('.windSpeedField2').innerHTML = `${JSON.stringify(data.current.wind_speed)} km/h `;
                document.querySelector('.windSpeedField2').innerHTML += `Direction: ${JSON.stringify(data.current.wind_dir)}`;
            })
            .catch((err) => console.log(err));
        
        let params3 = new URLSearchParams({
            access_key: api_key,
            query: 'China',
            units: 'm'
        })
        
        fetch(`http://api.weatherstack.com/current?${params3}`)
        .then((res) => res.json())
        .then((data) => {
                document.querySelector('.countryField3').innerHTML = `${JSON.stringify(data.location.country)}`;
                document.querySelector('.humidityField3').innerHTML = `${JSON.stringify(data.current.humidity)}%`;
                document.querySelector('.feelsLikeField3').innerHTML = `${JSON.stringify(data.current.feelslike)} C°`;
                document.querySelector('.temperatureField3').innerHTML = `${JSON.stringify(data.current.temperature)} C°`;
                document.querySelector('.descriptionField3').innerHTML = `${JSON.stringify(data.current.weather_descriptions[0])}`;
                document.querySelector('.windSpeedField3').innerHTML = `${JSON.stringify(data.current.wind_speed)} km/h `;
                document.querySelector('.windSpeedField3').innerHTML += `Direction: ${JSON.stringify(data.current.wind_dir)}`;
            })
            .catch((err) => console.log(err));
        
            
        let params4 = new URLSearchParams({
            access_key: api_key,
            query: 'London',
            units: 'm'
        })
        
        fetch(`http://api.weatherstack.com/current?${params4}`)
        .then((res) => res.json())
        .then((data) => {
                document.querySelector('.countryField4').innerHTML = `${JSON.stringify(data.location.country)}`;
                document.querySelector('.humidityField4').innerHTML = `${JSON.stringify(data.current.humidity)}%`;
                document.querySelector('.feelsLikeField4').innerHTML = `${JSON.stringify(data.current.feelslike)} C°`;
                document.querySelector('.temperatureField4').innerHTML = `${JSON.stringify(data.current.temperature)} C°`;
                document.querySelector('.descriptionField4').innerHTML = `${JSON.stringify(data.current.weather_descriptions[0])}`;
                document.querySelector('.windSpeedField4').innerHTML = `${JSON.stringify(data.current.wind_speed)} km/h `;
                document.querySelector('.windSpeedField4').innerHTML += `Direction: ${JSON.stringify(data.current.wind_dir)}`;
            })
            .catch((err) => console.log(err));
    
    
        let params5 = new URLSearchParams({
            access_key: api_key,
            query: 'India',
            units: 'm'
        })
        
        fetch(`http://api.weatherstack.com/current?${params5}`)
        .then((res) => res.json())
        .then((data) => {
                document.querySelector('.countryField5').innerHTML = `${JSON.stringify(data.location.country)}`;
                document.querySelector('.humidityField5').innerHTML = `${JSON.stringify(data.current.humidity)}%`;
                document.querySelector('.feelsLikeField5').innerHTML = `${JSON.stringify(data.current.feelslike)} C°`;
                document.querySelector('.temperatureField5').innerHTML = `${JSON.stringify(data.current.temperature)} C°`;
                document.querySelector('.descriptionField5').innerHTML = `${JSON.stringify(data.current.weather_descriptions[0])}`;
                document.querySelector('.windSpeedField5').innerHTML = `${JSON.stringify(data.current.wind_speed)} km/h `;
                document.querySelector('.windSpeedField5').innerHTML += `Direction: ${JSON.stringify(data.current.wind_dir)}`;
            })
            .catch((err) => console.log(err));
    
        let params6 = new URLSearchParams({
            access_key: api_key,
            query: 'Canada',
            units: 'm'
        })
        
        fetch(`http://api.weatherstack.com/current?${params6}`)
        .then((res) => res.json())
        .then((data) => {
                document.querySelector('.countryField6').innerHTML = `${JSON.stringify(data.location.country)}`;
                document.querySelector('.humidityField6').innerHTML = `${JSON.stringify(data.current.humidity)}%`;
                document.querySelector('.feelsLikeField6').innerHTML = `${JSON.stringify(data.current.feelslike)} C°`;
                document.querySelector('.temperatureField6').innerHTML = `${JSON.stringify(data.current.temperature)} C°`;
                document.querySelector('.descriptionField6').innerHTML = `${JSON.stringify(data.current.weather_descriptions[0])}`;
                document.querySelector('.windSpeedField6').innerHTML = `${JSON.stringify(data.current.wind_speed)} km/h `;
                document.querySelector('.windSpeedField6').innerHTML += `Direction: ${JSON.stringify(data.current.wind_dir)}`;
            })
            .catch((err) => console.log(err));
    
    
        let params7 = new URLSearchParams({
            access_key: api_key,
            query: 'Iran',
            units: 'm'
        })
        
        fetch(`http://api.weatherstack.com/current?${params7}`)
        .then((res) => res.json())
        .then((data) => {
                document.querySelector('.countryField7').innerHTML = `${JSON.stringify(data.location.country)}`;
                document.querySelector('.humidityField7').innerHTML = `${JSON.stringify(data.current.humidity)}%`;
                document.querySelector('.feelsLikeField7').innerHTML = `${JSON.stringify(data.current.feelslike)} C°`;
                document.querySelector('.temperatureField7').innerHTML = `${JSON.stringify(data.current.temperature)} C°`;
                document.querySelector('.descriptionField7').innerHTML = `${JSON.stringify(data.current.weather_descriptions[0])}`;
                document.querySelector('.windSpeedField7').innerHTML = `${JSON.stringify(data.current.wind_speed)} km/h `;
                document.querySelector('.windSpeedField7').innerHTML += `Direction: ${JSON.stringify(data.current.wind_dir)}`;
            })
            .catch((err) => console.log(err));
    
        let params8 = new URLSearchParams({
            access_key: api_key,
            query: 'Netherlands',
            units: 'm'
        })
        
        fetch(`http://api.weatherstack.com/current?${params8}`)
        .then((res) => res.json())
        .then((data) => {
                document.querySelector('.countryField8').innerHTML = `${JSON.stringify(data.location.country)}`;
                document.querySelector('.humidityField8').innerHTML = `${JSON.stringify(data.current.humidity)}%`;
                document.querySelector('.feelsLikeField8').innerHTML = `${JSON.stringify(data.current.feelslike)} C°`;
                document.querySelector('.temperatureField8').innerHTML = `${JSON.stringify(data.current.temperature)} C°`;
                document.querySelector('.descriptionField8').innerHTML = `${JSON.stringify(data.current.weather_descriptions[0])}`;
                document.querySelector('.windSpeedField8').innerHTML = `${JSON.stringify(data.current.wind_speed)} km/h `;
                document.querySelector('.windSpeedField8').innerHTML += `Direction: ${JSON.stringify(data.current.wind_dir)}`;
            })
            .catch((err) => console.log(err));
    
        let params9 = new URLSearchParams({
            access_key: api_key,
            query: 'Madagascar',
            units: 'm'
        })
        
        fetch(`http://api.weatherstack.com/current?${params9}`)
        .then((res) => res.json())
        .then((data) => {
                document.querySelector('.countryField9').innerHTML = `${JSON.stringify(data.location.country)}`;
                document.querySelector('.humidityField9').innerHTML = `${JSON.stringify(data.current.humidity)}%`;
                document.querySelector('.feelsLikeField9').innerHTML = `${JSON.stringify(data.current.feelslike)} C°`;
                document.querySelector('.temperatureField9').innerHTML = `${JSON.stringify(data.current.temperature)} C°`;
                document.querySelector('.descriptionField9').innerHTML = `${JSON.stringify(data.current.weather_descriptions[0])}`;
                document.querySelector('.windSpeedField9').innerHTML = `${JSON.stringify(data.current.wind_speed)} km/h `;
                document.querySelector('.windSpeedField9').innerHTML += `Direction: ${JSON.stringify(data.current.wind_dir)}`;
            })
            .catch((err) => console.log(err));
    
        let params10 = new URLSearchParams({
            access_key: api_key,
            query: 'Colombia',
            units: 'm'
        })
        
        fetch(`http://api.weatherstack.com/current?${params10}`)
        .then((res) => res.json())
        .then((data) => {
                document.querySelector('.countryField10').innerHTML = `${JSON.stringify(data.location.country)}`;
                document.querySelector('.humidityField10').innerHTML = `${JSON.stringify(data.current.humidity)}%`;
                document.querySelector('.feelsLikeField10').innerHTML = `${JSON.stringify(data.current.feelslike)} C°`;
                document.querySelector('.temperatureField10').innerHTML = `${JSON.stringify(data.current.temperature)} C°`;
                document.querySelector('.descriptionField10').innerHTML = `${JSON.stringify(data.current.weather_descriptions[0])}`;
                document.querySelector('.windSpeedField10').innerHTML = `${JSON.stringify(data.current.wind_speed)} km/h `;
                document.querySelector('.windSpeedField10').innerHTML += `Direction: ${JSON.stringify(data.current.wind_dir)}`;
            })
            .catch((err) => console.log(err));
    }