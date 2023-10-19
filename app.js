
const API_KEY = '9f34e005a51f891e2c9e4f7a8cd475de';

async function searchWeather() {
    const city = document.getElementById('cityInput').value;
    if (!city) return;

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await response.json();

        displayWeather(data);
    } catch (err) {
        console.error('Error fetching weather:', err);
    }
}

function displayWeather(data) {
    const weatherCard = document.getElementById('weatherCard');
    const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    weatherCard.innerHTML = `
        <h2>${data.name}</h2>
        <img src="${iconUrl}" alt="Weather icon" class="weather-icon">
        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>Description:</strong> ${data.weather[0].description}</p>
    `;

    weatherCard.style.display = 'block';
}
