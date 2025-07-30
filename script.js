document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('maskOverlay');
  const nextBtn = document.querySelector('.next');
  const music = document.getElementById('bg-music');

  // Espera a que todo esté cargado
  window.addEventListener('load', () => {
    setTimeout(() => {
      // Oculta la máscara animada
      if (overlay) overlay.style.display = 'none';

      // Permite hacer scroll si lo necesitas
      document.body.style.overflow = 'auto';

      // Muestra el botón "Siguiente"
      if (nextBtn) nextBtn.style.display = 'block';

      // Reproduce la música si el navegador lo permite
      if (music) {
        const playPromise = music.play();
        if (playPromise !== undefined) {
          playPromise.catch(err => {
            console.warn('El navegador bloqueó la reproducción automática. El usuario debe interactuar primero.');
          });
        }
      }
    }, 2200); // Espera 2.2s para terminar la animación
  });
});
