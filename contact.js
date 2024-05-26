const contactForm = document.getElementById('contact-form');
const thankYou = document.getElementById('thank-you');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  thankYou.classList.remove('hidden');
  contactForm.classList.add('hidden');
});