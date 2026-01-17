// Menu mobile
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

// Scroll suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const id = link.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
      // Fecha menu mobile após clique
      nav.classList.remove('open');
    }
  });
});

// Melhorias no <details> do FAQ (fecha outros ao abrir um)
const detailsList = document.querySelectorAll('.accordion details');
detailsList.forEach(d => {
  d.addEventListener('toggle', () => {
    if (d.open) {
      detailsList.forEach(other => {
        if (other !== d) other.open = false;
      });
    }
  });
});
