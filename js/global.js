// /js/global.js
let bond = parseInt(localStorage.getItem('bond') || '0');
let suspicion = parseInt(localStorage.getItem('suspicion') || '0');
let clarity = parseInt(localStorage.getItem('clarity') || '0');

function updateStatsDisplay() {
  if (document.getElementById('bond')) {
    document.getElementById('bond').innerText = bond;
    document.getElementById('suspicion').innerText = suspicion;
    document.getElementById('clarity').innerText = clarity;
  }
}

function changeStats({ bondDelta = 0, suspicionDelta = 0, clarityDelta = 0 }) {
  bond += bondDelta;
  suspicion += suspicionDelta;
  clarity += clarityDelta;

  localStorage.setItem('bond', bond);
  localStorage.setItem('suspicion', suspicion);
  localStorage.setItem('clarity', clarity);

  updateStatsDisplay();
}

function goToScene(sceneFile, delay = 5500) {
  setTimeout(() => {
    window.location.href = sceneFile;
  }, delay);
}

updateStatsDisplay();
