function refreshWeather() {
    $.get('https://api.open-meteo.com/v1/forecast?latitude=39.4817&longitude=-106.0383&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,sunrise,sunset,precipitation_probability_max,wind_speed_10m_max&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FDenver&forecast_days=1', (data) => {
        console.log(data)
        let high = document.querySelector('.weather .temp-high');
        high.innerText = "Today's high: " + (data.daily.temperature_2m_max) + "°";
        let low = document.querySelector('.weather .temp-low');
        low.innerText = "Today's low: " +(data.daily.temperature_2m_min) + "°";
        let precip = document.querySelector('.weather .precipitation');
        precip.innerText = "Chance of precipitation: " +(data.daily.precipitation_probability_max)+ '%';
        let sunrise = document.querySelector('.weather .sunrise');
        sunrise.innerText = "Sunrise: " + (data.daily.sunrise);
        let sunset = document.querySelector('.weather .sunset');
        sunset.innerText = "Sunset: " + (data.daily.sunset);
    });
};
let refreshBtn = document.getElementById('refresh')
refreshBtn.addEventListener('click', refreshWeather)




