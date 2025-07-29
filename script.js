const revealMask = document.getElementById('revealMask');
const nextBtn = document.querySelector('.next');
const music = document.getElementById('bg-music');

window.addEventListener('load', () => {
  const overlay = document.getElementById('maskOverlay');
  setTimeout(() => {
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto'; // permite scroll después
  }, 2000); // Tiempo que dura la animación
});
