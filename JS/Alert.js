const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop page reload

  alert("✅ Message sent successfully!");

  form.reset(); // clear form fields
});