const apiKey = 'YOUR_API_KEY';
const getWeatherButton = document.getElementById('getWeather');
const cityInput = document.getElementById('city');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');

getWeatherButton.addEventListener('click', async () => {
  const city = cityInput.value;
  if (city === '') {
    alert('Please enter a city name.');
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('City not found');
    }

    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    alert(error.message);
  }
});

function displayWeather(data) {
  cityName.textContent = `Weather in ${data.name}`;
  temperature.textContent = `Temperature: ${data.main.temp}°C`;
  description.textContent = `Condition: ${data.weather[0].description}`;
  humidity.textContent = `Humidity: ${data.main.humidity}%`;
}
