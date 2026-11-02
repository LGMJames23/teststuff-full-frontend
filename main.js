async function fetchWeatherByCoordinates(lat, lon, labelName = "Weather") {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&timezone=auto`
    );

    if (!response.ok) {
      throw new Error("Weather request failed");
    }

    const data = await response.json();
    const tempC = Math.round(data?.current?.temperature_2m ?? 0);
    const tempF = Math.round((tempC * 9) / 5 + 32);
    const weatherCode = data?.current?.weather_code ?? 0;
    const weatherIcon = document.querySelector(".weather-icon");

    weatherTemp.textContent = `${tempF}°F`;
    weatherCondition.textContent = getWeatherLabel(weatherCode);
    if (weatherIcon) {
      weatherIcon.textContent = getWeatherIcon(weatherCode);
    }

    if (labelName && labelName !== "My location") {
      cityLabel.textContent = labelName;
    }
  } catch (error) {
    weatherTemp.textContent = "—";
    weatherCondition.textContent = "Weather unavailable";
    const weatherIcon = document.querySelector(".weather-icon");
    if (weatherIcon) {
      weatherIcon.textContent = "⚠️";
    }
  }
}

function getWeatherLabel(code) {
  const weatherMap = {
    0: "Clear sky",
    1: "Mostly clear",
    2: "Partly cloudy",
    3: "Cloudy",
    45: "Fog",
    48: "Fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
    56: "Freezing drizzle",
    57: "Heavy freezing drizzle",
    61: "Light rain",
    63: "Moderate rain",
    65: "Heavy rain",
    80: "Showers",
    81: "Heavy showers",
    82: "Violent rain showers",
    95: "Thunderstorm",
    96: "Thunderstorm with hail",
    99: "Severe thunderstorm"
  };

  return weatherMap[code] || "Weather";
}

function getWeatherIcon(code) {
  const iconMap = {
    0: "☀️",
    1: "🌤️",
    2: "⛅",
    3: "☁️",
    45: "🌫️",
    48: "🌫️",
    51: "🌦️",
    53: "🌦️",
    55: "🌧️",
    56: "🌧️",
    57: "🌧️",
    61: "🌦️",
    63: "🌧️",
    65: "🌧️",
    80: "🌧️",
    81: "🌧️",
    82: "🌧️",
    95: "⛈️",
    96: "⛈️",
    99: "⛈️"
  };

  return iconMap[code] || "🌤️";
}
