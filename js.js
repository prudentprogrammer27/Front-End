function refreshWeather() {
    $.get('https://api.open-meteo.com/v1/forecast?latitude=39.4817&longitude=-106.0383&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FDenver&forecast_days=1', (data) => {
        let highTemp = document.querySelector('h2');
        highTemp.innerText = (data.daily.temperature_2m_max);
    });
};
let refreshBtn = document.getElementById('refresh')
refreshBtn.addEventListener('click', refreshWeather)




