
function checkPassword() {
  const input = document.getElementById("code-input").value;
  const correct = "awge2024";
  const errorMsg = document.getElementById("error-msg");
  const audio = document.getElementById("glitch-sound");

  if (input.toLowerCase() === correct) {
    document.getElementById("password-gate").classList.add("hidden");
    document.getElementById("main-content").classList.remove("hidden");
    audio.play();
  } else {
    errorMsg.textContent = "Wrong code.";
  }
}
