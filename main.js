const authPanel = document.getElementById("authPanel");
const loginToggle = document.getElementById("loginToggle");
const closeAuth = document.getElementById("closeAuth");
const splashBtn = document.getElementById("splashBtn");
const splashText = document.getElementById("splashText");
const citySelect = document.getElementById("citySelect");
const cityLabel = document.getElementById("cityLabel");
const timeLabel = document.getElementById("timeLabel");
const dateLabel = document.getElementById("dateLabel");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");
const weatherTemp = document.getElementById("weatherTemp");
const weatherCondition = document.getElementById("weatherCondition");
const profileName = document.getElementById("profileName");
const mainGreeting = document.getElementById("mainGreeting");

const cityCoordinates = {
  "New York": { latitude: 40.7128, longitude: -74.006 },
  "Chicago": { latitude: 41.8781, longitude: -87.6298 },
  "Dallas": { latitude: 32.7767, longitude: -96.797 },
  "Erie": { latitude: 42.1292, longitude: -80.0851 },
  "Houston": { latitude: 29.7604, longitude: -95.3698 },
  "Los Angeles": { latitude: 34.0522, longitude: -118.2437 },
  "Miami": { latitude: 25.7617, longitude: -80.1918 },
  "Kabul": { latitude: 34.5553, longitude: 69.2075 },
  "Algiers": { latitude: 36.7538, longitude: 3.0588 },
  "Luanda": { latitude: -8.839, longitude: 13.2894 },
  "Brisbane": { latitude: -27.4698, longitude: 153.0251 },
  "Melbourne": { latitude: -37.8136, longitude: 144.9631 },
  "Perth": { latitude: -31.9505, longitude: 115.8605 },
  "Sydney": { latitude: -33.8688, longitude: 151.2093 },
  "Dhaka": { latitude: 23.8103, longitude: 90.4125 },
  "Belo Horizonte": { latitude: -19.9227, longitude: -43.9451 },
  "Brasilia": { latitude: -15.7939, longitude: -47.8828 },
  "Campinas": { latitude: -22.9068, longitude: -47.0616 },
  "Curitiba": { latitude: -25.4284, longitude: -49.2733 },
  "Rio de Janeiro": { latitude: -22.9068, longitude: -43.1729 },
  "Sao Paulo": { latitude: -23.5505, longitude: -46.6333 },
  "Montreal": { latitude: 45.5017, longitude: -73.5673 },
  "Toronto": { latitude: 43.6532, longitude: -79.3832 },
  "Vancouver": { latitude: 49.2827, longitude: -123.1207 },
  "Santiago": { latitude: -33.4489, longitude: -70.6693 },
  "Beijing": { latitude: 39.9042, longitude: 116.4074 },
  "Chengdu": { latitude: 30.5728, longitude: 104.0668 },
  "Chongqing": { latitude: 29.563, longitude: 106.5516 },
  "Dongguan": { latitude: 23.0207, longitude: 113.7518 },
  "Foshan": { latitude: 23.0278, longitude: 113.1327 },
  "Guangzhou": { latitude: 23.1291, longitude: 113.2644 },
  "Hangzhou": { latitude: 30.2741, longitude: 120.1551 },
  "Harbin": { latitude: 45.8038, longitude: 126.5349 },
  "Nanjing": { latitude: 32.0603, longitude: 118.7969 },
  "Shanghai": { latitude: 31.2304, longitude: 121.4737 },
  "Shenyang": { latitude: 41.8057, longitude: 123.4315 },
  "Shenzhen": { latitude: 22.5431, longitude: 114.0579 },
  "Suzhou": { latitude: 31.2989, longitude: 120.5853 },
  "Tianjin": { latitude: 39.3434, longitude: 117.3616 },
  "Wuhan": { latitude: 30.5928, longitude: 114.3055 },
  "Xi'an": { latitude: 34.3416, longitude: 108.9398 },
  "Bogota": { latitude: 4.711, longitude: -74.0721 },
  "Havana": { latitude: 23.1136, longitude: -82.3666 },
  "Santo Domingo": { latitude: 18.4861, longitude: -69.9312 },
  "Kinshasa": { latitude: -4.4419, longitude: 15.2663 },
  "Guayaquil": { latitude: -2.1709, longitude: -79.9224 },
  "Alexandria": { latitude: 31.2001, longitude: 29.9187 },
  "Cairo": { latitude: 30.0444, longitude: 31.2357 },
  "Addis Ababa": { latitude: 8.9806, longitude: 38.7578 },
  "Paris": { latitude: 48.8566, longitude: 2.3522 },
  "Berlin": { latitude: 52.52, longitude: 13.405 },
  "Accra": { latitude: 5.6037, longitude: -0.187 },
  "Hong Kong": { latitude: 22.3193, longitude: 114.1694 },
  "Ahmedabad": { latitude: 23.0225, longitude: 72.5714 },
  "Bangalore": { latitude: 12.9716, longitude: 77.5946 },
  "Chennai": { latitude: 13.0827, longitude: 80.2707 },
  "Delhi": { latitude: 28.6139, longitude: 77.209 },
  "Hyderabad": { latitude: 17.385, longitude: 78.4867 },
  "Jaipur": { latitude: 26.9124, longitude: 75.7873 },
  "Kolkata": { latitude: 22.5726, longitude: 88.3639 },
  "Lucknow": { latitude: 26.8467, longitude: 80.9462 },
  "Mumbai": { latitude: 19.076, longitude: 72.8777 },
  "Pune": { latitude: 18.5204, longitude: 73.8567 },
  "Surat": { latitude: 21.1702, longitude: 72.8311 },
  "Jakarta": { latitude: -6.2088, longitude: 106.8456 },
  "Medan": { latitude: 3.5952, longitude: 98.6722 },
  "Surabaya": { latitude: -7.2575, longitude: 112.7521 },
  "Tehran": { latitude: 35.6892, longitude: 51.389 },
  "Baghdad": { latitude: 33.3152, longitude: 44.3661 },
  "Rome": { latitude: 41.9028, longitude: 12.4964 },
  "Abidjan": { latitude: 5.3600, longitude: -4.0083 },
  "Nagoya": { latitude: 35.1815, longitude: 136.9066 },
  "Osaka": { latitude: 34.6937, longitude: 135.5023 },
  "Tokyo": { latitude: 35.6762, longitude: 139.6503 },
  "Nairobi": { latitude: -1.2864, longitude: 36.8172 },
  "Kuala Lumpur": { latitude: 3.139, longitude: 101.6869 },
  "Guadalajara": { latitude: 20.6597, longitude: -103.3496 },
  "Mexico City": { latitude: 19.4326, longitude: -99.1332 },
  "Casablanca": { latitude: 33.5731, longitude: -7.5898 },
  "Kano": { latitude: 12.0022, longitude: 8.592 },
  "Lagos": { latitude: 6.5244, longitude: 3.3792 },
  "Pyongyang": { latitude: 39.0392, longitude: 125.7625 },
  "Faisalabad": { latitude: 31.4187, longitude: 73.0791 },
  "Karachi": { latitude: 24.8607, longitude: 67.0011 },
  "Lahore": { latitude: 31.5204, longitude: 74.3587 },
  "Lima": { latitude: -12.0464, longitude: -77.0428 },
  "Manila": { latitude: 14.5995, longitude: 120.9842 },
  "Quezon City": { latitude: 14.676, longitude: 121.0437 },
  "Moscow": { latitude: 55.7558, longitude: 37.6173 },
  "Jeddah": { latitude: 21.4858, longitude: 39.1925 },
  "Riyadh": { latitude: 24.7136, longitude: 46.6753 },
  "Singapore": { latitude: 1.3521, longitude: 103.8198 },
  "Cape Town": { latitude: -33.9249, longitude: 18.4241 },
  "Durban": { latitude: -29.8587, longitude: 31.0218 },
  "Johannesburg": { latitude: -26.2041, longitude: 28.0473 },
  "Incheon": { latitude: 37.4563, longitude: 126.7052 },
  "Seoul": { latitude: 37.5665, longitude: 126.978 },
  "Madrid": { latitude: 40.4168, longitude: -3.7038 },
  "Khartoum": { latitude: 15.5007, longitude: 32.5599 },
  "Taipei": { latitude: 25.033, longitude: 121.5654 },
  "Dar es Salaam": { latitude: -6.7924, longitude: 39.2083 },
  "Bangkok": { latitude: 13.7563, longitude: 100.5018 },
  "Istanbul": { latitude: 41.0082, longitude: 28.9784 },
  "Izmir": { latitude: 38.4237, longitude: 27.1428 },
  "Dubai": { latitude: 25.2048, longitude: 55.2708 },
  "London": { latitude: 51.5072, longitude: -0.1276 },
  "Kyiv": { latitude: 50.4501, longitude: 30.5234 },
  "Tashkent": { latitude: 41.2995, longitude: 69.2401 },
  "Caracas": { latitude: 10.4806, longitude: -66.9036 },
  "Ho Chi Minh City": { latitude: 10.8231, longitude: 106.6297 },
  "Sanaa": { latitude: 15.3694, longitude: 44.191 },
  "My location": { latitude: null, longitude: null }
};

const splashOptions = [
  "I made this in school.",
  "Bell is watching your ideas.",
  "The future is just a prompt away.",
  "Do people actually read these?",
  "This app has more personality than my code.",
  "Small ideas become big products.",
  "I can help you think faster.",
  "Stay curious. Build things.",
  "A calm interface for a loud internet.",
  "Breaking News: Lil Baby Is Secretly an Adult",
  "Fun Fact: Teen Pregnancy is shown to decrease around age 20!",
  "What do you think you're looking at?",
  "Minecraft did this better.",
  "Australia is wider than the moon!",
  "Sharks were on Earth before trees were.",
  "Ostriches have larger eyes than brains.",
  "Octopi should really be Octopuses, and octopuses have 3 hearts!",
  "ARIBA!!!",
  "Try to hum while closing your nostrils.",
  "DO NOT eat bread from a bathroom.",
  "I ran out of creativity.",
  "Thank you! Thank you! Thank you! Thank you! Thank you!",
  "To Infinity and Lebron!!!"
];

function pickSplashText() {
  const randomIndex = Math.floor(Math.random() * splashOptions.length);
  splashText.textContent = splashOptions[randomIndex];
}

function openAuthPanel() {
  authPanel.classList.add("visible");
}

function closeAuthPanel() {
  authPanel.classList.remove("visible");
}

loginToggle.addEventListener("click", openAuthPanel);
closeAuth.addEventListener("click", closeAuthPanel);

splashBtn.addEventListener("click", pickSplashText);

document.querySelectorAll(".toggle-btn").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".toggle-btn").forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const authMode = button.dataset.auth;
    document.querySelectorAll(".auth-form").forEach((form) => {
      form.classList.toggle("active", form.id === `${authMode}Form`);
    });
  });
});

function updateTime() {
  const now = new Date();
  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  });

  const date = now.toLocaleDateString([], {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric"
  });

  timeLabel.textContent = time;
  dateLabel.textContent = date;
}

function updateGreeting() {
  const hour = new Date().getHours();

  if (hour < 12) {
    mainGreeting.textContent = "Good morning";
  } else if (hour < 18) {
    mainGreeting.textContent = "Good afternoon";
  } else {
    mainGreeting.textContent = "Good evening";
  }
}

function setCity(city) {
  cityLabel.textContent = city;
  if (cityCoordinates[city]) {
    citySelect.value = city;
  }
}

citySelect.addEventListener("change", (event) => {
  const nextCity = event.target.value;
  setCity(nextCity);
  fetchWeather(nextCity);
});

function addMessage(role, text) {
  const message = document.createElement("div");
  message.className = `message ${role}`;

  const bubble = document.createElement("div");
  bubble.className = "message-bubble";
  bubble.textContent = text;

  message.appendChild(bubble);
  chatMessages.appendChild(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = chatInput.value.trim();
  if (!text) return;

  addMessage("user", text);
  chatInput.value = "";

  setTimeout(() => {
    addMessage(
      "bot",
      "I’m Bell. I can help with that. Connect this form to your backend AI endpoint to return a real response."
    );
  }, 350);
});

document.getElementById("useMyLocation").addEventListener("change", (event) => {
  if (event.target.checked) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          setCity("My location");
          weatherCondition.textContent = "Using your location";
          fetchWeatherByCoordinates(lat, lon, "My location");
        },
        () => {
          weatherCondition.textContent = "Location access denied";
          document.getElementById("useMyLocation").checked = false;
        }
      );
    } else {
      weatherCondition.textContent = "Geolocation not supported";
      document.getElementById("useMyLocation").checked = false;
    }
  }
});

async function fetchWeatherByCoordinates(lat, lon, labelName = "Weather") {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weathercode&timezone=auto`
    );

    if (!response.ok) {
      throw new Error("Weather request failed");
    }

    const data = await response.json();
    const temp = Math.round(data?.current?.temperature_2m ?? 0);
    const weatherCode = data?.current?.weathercode ?? 0;

    weatherTemp.textContent = `${temp}°`;
    weatherCondition.textContent = getWeatherLabel(weatherCode);
    if (labelName && labelName !== "My location") {
      cityLabel.textContent = labelName;
    }
  } catch (error) {
    weatherTemp.textContent = "—";
    weatherCondition.textContent = "Weather unavailable";
  }
}

async function fetchWeather(city) {
  const coordinates = cityCoordinates[city];
  if (!coordinates) {
    weatherTemp.textContent = "—";
    weatherCondition.textContent = "City unavailable";
    return;
  }

  await fetchWeatherByCoordinates(coordinates.latitude, coordinates.longitude, city);
}

function getWeatherLabel(code) {
  const weatherMap = {
    0: "Clear sky",
    1: "Mostly clear",
    2: "Partly cloudy",
    3: "Cloudy",
    45: "Fog",
    48: "Fog",
    61: "Rain",
    63: "Rain showers",
    80: "Showers",
    95: "Thunderstorm"
  };

  return weatherMap[code] || "Weather";
}

document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  if (!username || !password) {
    document.getElementById("loginFeedback").textContent = "Please fill in both fields.";
    return;
  }

  document.getElementById("loginFeedback").textContent = "This is a frontend-only demo. Connect to your backend API to log in.";
  closeAuthPanel();
});

document.getElementById("registerForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("registerUsername").value.trim();
  const password = document.getElementById("registerPassword").value.trim();
  const name = document.getElementById("registerName").value.trim();

  if (!username || !password || !name) {
    document.getElementById("registerFeedback").textContent = "Please fill in all fields.";
    return;
  }

  document.getElementById("registerFeedback").textContent = "This is a frontend-only demo. Connect to your backend API to register.";
  closeAuthPanel();
});

pickSplashText();
updateTime();
updateGreeting();
fetchWeather("New York");
setInterval(updateTime, 1000);
profileName.textContent = "Guest";





















































































































