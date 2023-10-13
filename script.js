const form = document.querySelector('form');
const input = document.querySelector('input');
const weatherInfo = document.querySelector('#weather-info');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const location = input.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=9f34e005a51f891e2c9e4f7a8cd475de&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const temp = data.main.temp;
      const description = data.weather[0].description;
      weatherInfo.textContent = `Current temperature in ${location}: ${temp}°C and ${description}.`;
    })
    .catch(error => {
      console.log(error);
      weatherInfo.textContent = 'Unable to retrieve weather data. Please try again later.';
    });
});