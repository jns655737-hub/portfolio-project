const emailBtn = document.getElementById("emailBtn");

emailBtn.addEventListener("click", () => {
  const email = "jns655737@gmail.com";

  navigator.clipboard.writeText(email).then(() => {
    showAlert("📧 Email copied: " + email);
  });
});

// simple alert UI
function showAlert(message) {
  const alertBox = document.createElement("div");
  alertBox.textContent = message;

  alertBox.style.position = "fixed";
  alertBox.style.bottom = "20px";
  alertBox.style.left = "50%";
  alertBox.style.transform = "translateX(-50%)";
  alertBox.style.background = "#4f46e5";
  alertBox.style.color = "#fff";
  alertBox.style.padding = "10px 20px";
  alertBox.style.borderRadius = "8px";
  alertBox.style.zIndex = "999";

  document.body.appendChild(alertBox);

  setTimeout(() => {
    alertBox.remove();
  }, 2000);
}