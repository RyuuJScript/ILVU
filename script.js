const revealMask = document.getElementById('revealMask');
const nextBtn = document.querySelector('.next');
const music = document.getElementById('bg-music');

window.addEventListener('load', () => {
  // Reproducir música justo al terminar animación
  setTimeout(() => {
    revealMask.style.display = 'none';       // oculta la capa negra
    nextBtn.style.display = 'block';         // muestra el botón siguiente
    music.play();                             // inicia la música
  }, 1600);
});
