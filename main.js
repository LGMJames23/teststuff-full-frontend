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
  citySelect.value = city;
}

citySelect.addEventListener("change", (event) => {
  setCity(event.target.value);
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
          const localCity = "My location";

          setCity(localCity);
          weatherCondition.textContent = "Location updated";
          weatherTemp.textContent = "…";
          console.log({ lat, lon });
        },
        () => {
          weatherCondition.textContent = "Location access denied";
        }
      );
    } else {
      weatherCondition.textContent = "Geolocation not supported";
    }
  }
});

async function fetchWeather(city) {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=40.7128&longitude=-74.0060&current=temperature_2m,weathercode&timezone=auto`
    );

    if (!response.ok) {
      throw new Error("Weather request failed");
    }

    const data = await response.json();
    const temp = Math.round(data.current.temperature_2m);
    const weatherCode = data.current.weathercode;

    weatherTemp.textContent = `${temp}°`;
    weatherCondition.textContent = getWeatherLabel(weatherCode);

    if (city === "New York") {
      setCity("New York");
    }
  } catch (error) {
    weatherTemp.textContent = "—";
    weatherCondition.textContent = "Weather unavailable";
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
