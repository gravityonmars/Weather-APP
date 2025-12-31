const apiKey = "994a328b9d4143ae899230826251212";
function getWeather() {
  const city = document.getElementById("cityInput").value;

  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        document.getElementById("weatherResult").innerHTML =
          "City not found";
        return;
      }

      document.getElementById("weatherResult").innerHTML = `
        <h3>${data.location.name}, ${data.location.country}</h3>
        <img src="${data.current.condition.icon}" alt="weather icon">
        <p>Temperature: ${data.current.temp_c} °C</p>
        <p>Condition: ${data.current.condition.text}</p>
        <p>Wind: ${data.current.wind_kph} km/h</p>
        <p>Humidity: ${data.current.humidity}%</p>
      `;
    })
    .catch(() => {
      document.getElementById("weatherResult").innerHTML =
        "Error fetching data";
    });
}

