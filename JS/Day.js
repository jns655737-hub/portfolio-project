// Dynamic Greeting
const greetingElement = document.getElementById("greeting");

function setGreeting() {
  const hour = new Date().getHours();
  let message = "";

  if (hour < 12) {
    message = "Good Morning ☀️";
  } else if (hour < 18) {
    message = "Good Afternoon 🌤️";
  } else {
    message = "Good Evening 🌙";
  }

  greetingElement.textContent = message;
}

// Run after page loads
document.addEventListener("DOMContentLoaded", setGreeting);