const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
let current = 0;

nextBtn.addEventListener('click', () => {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
});

window.addEventListener('load', () => {
  setTimeout(() => {
    document.body.classList.remove('hidden');
    const transition = document.getElementById('circleTransition');
    if (transition) transition.remove();
  }, 1600); // dura un poco más que la animación del círculo
});

