const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
let current = 0;

nextBtn.addEventListener('click', () => {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
});
