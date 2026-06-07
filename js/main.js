// smooth scroll
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// modal safe init
const showFormBtn = document.getElementById('showFormBtn');
const modal = document.getElementById('modalForm');
const closeModal = document.getElementById('closeModal');
const contactForm = document.getElementById('contactForm');

if (showFormBtn && modal) {
  showFormBtn.addEventListener('click', () => modal.classList.remove('hidden'));
}

if (closeModal && modal) {
  closeModal.addEventListener('click', () => modal.classList.add('hidden'));
}

window.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.add('hidden');
});

if (contactForm) {
  const thankMsg = contactForm.querySelector('.thank-message');

  contactForm.addEventListener('submit', () => {
    setTimeout(() => {
      contactForm.reset();
      if (thankMsg) thankMsg.style.display = 'block';

      setTimeout(() => {
        if (thankMsg) thankMsg.style.display = 'none';
        modal.classList.add('hidden');
      }, 2000);
    }, 100);
  });
}
