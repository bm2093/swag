
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

document.querySelector('.xp-button:nth-child(1)').addEventListener('click', () => {
  document.getElementById('xpWindow').style.display = 'none';
  document.getElementById('restoreWindow').classList.remove('hidden');
});

document.getElementById('restoreWindow').addEventListener('click', () => {
  document.getElementById('xpWindow').style.display = 'block';
  document.getElementById('restoreWindow').classList.add('hidden');
});

document.querySelectorAll('.start-menu-right ul li').forEach((li) => {
  if (li.textContent.includes('Shut Down')) {
    li.addEventListener('click', () => {
      document.getElementById('bsodScreen').classList.add('show');
    });
  }
});

setTimeout(() => {
  const tab = document.getElementById('music-tab');
  tab.classList.add('show');
  setTimeout(() => {
    tab.classList.remove('show');
  }, 4000);
}, 3000);
