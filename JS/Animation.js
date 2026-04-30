const roles = [
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "MERN Stack Developer"
];

let index = 0;        // which word
let charIndex = 0;    // which letter
let currentText = "";
let isDeleting = false;

const typingElement = document.getElementById("typingText");

function typeEffect() {
  currentText = roles[index];

  if (!isDeleting) {
    typingElement.textContent = currentText.slice(0, charIndex++);
  } else {
    typingElement.textContent = currentText.slice(0, charIndex--);
  }

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentText.length + 1) {
    speed = 1500; // pause after typing
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % roles.length;
    speed = 300;
  }

  setTimeout(typeEffect, speed);
}

// Start typing
document.addEventListener("DOMContentLoaded", typeEffect);