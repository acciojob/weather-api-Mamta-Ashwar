const apiKey = "YOUR_API_KEY"; // <-- Replace this with your OpenWeatherMap API key
const weatherBtn = document.getElementById("getWeatherBtn");
const weatherDiv = document.getElementById("weatherData");

weatherBtn.addEventListener("click", () => {
  weatherDiv.textContent = "Loading...";

  // Build the API URL for London weather (metric units for Celsius)
  const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // You can add other headers here if needed
    }
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      // Extract main weather description from response
      const weatherMain = data.weather[0].main;
      weatherDiv.textContent = `Current weather in London: ${weatherMain}`;
    })
    .catch((error) => {
      weatherDiv.textContent = "Failed to fetch weather data.";
      console.error("Error fetching weather:", error);
    });
});
