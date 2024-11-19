let timer;
let seconds = 0;

function actualizaTiempo() {
  const display = document.getElementById('display');
  const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  display.textContent = `${mins}:${secs}`;
}

document.getElementById('start').onclick = function() {
  if (!timer) {
    timer = setInterval(() => {
      seconds++;
      actualizaTiempo();
    }, 1000);
  }
};

document.getElementById('stop').onclick = function() {
  clearInterval(timer);
  timer = null;
};

document.getElementById('reset').onclick = function() {
  clearInterval(timer);
  timer = null;
  seconds = 0;
  actualizaTiempo();
};
