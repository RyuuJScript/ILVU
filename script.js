const overlay = document.getElementById('maskOverlay');
const nextBtn = document.querySelector('.next');
const music = document.getElementById('bg-music');

window.addEventListener('load', () => {
  // Inicia la música después del revelado (opcional)
  setTimeout(() => {
    // Oculta la máscara tras la animación
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto'; // permite scroll si lo necesitas
    nextBtn.style.display = 'block'; // muestra el botón "Siguiente"
    music.play(); // empieza la música (si el navegador lo permite)
  }, 2200); // Espera justo más de 2s para asegurar que termine la animación
});
