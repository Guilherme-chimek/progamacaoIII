// MENU MOBILE
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Fecha menu ao clicar em link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// SCROLL SUAVE PARA SEÇÕES
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// FORMULÁRIO DE CONTATO
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Mensagem enviada com sucesso! (Demo)');
  this.reset();
});

// FUNÇÕES PARA ABRIR LINKS - SOLUÇÃO DEFINITIVA
function abrirSpotify(albumId) {
  const url = `https://open.spotify.com/album/${albumId}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

function abrirYouTube(videoId) {
  const url = `https://www.youtube.com/watch?v=${videoId}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

// ANIMAÇÃO AO ROLAR A TELA
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal', 'active');
    }
  });
}, observerOptions);

// Observa todas as seções
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Navbar transparente no topo
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.style.background = 'rgba(17,20,14,0.98)';
  } else {
    navbar.style.background = 'rgba(17,20,14,0.85)';
  }
});