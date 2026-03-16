// Плавный скролл
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});


const showFormBtn = document.getElementById('showFormBtn');
const modal = document.getElementById('modalForm');
const closeModal = document.getElementById('closeModal');
const contactForm = document.getElementById('contactForm');
const thankMsg = contactForm.querySelector('.thank-message');

showFormBtn.addEventListener('click', () => { modal.classList.remove('hidden'); });
closeModal.addEventListener('click', () => { modal.classList.add('hidden'); });
window.addEventListener('click', (e) => { if(e.target===modal) modal.classList.add('hidden'); });


contactForm.addEventListener('submit', (e) => {
  setTimeout(() => {
    contactForm.reset();
    thankMsg.style.display='block';
    setTimeout(() => { thankMsg.style.display='none'; modal.classList.add('hidden'); }, 2000);
  }, 100);
});
