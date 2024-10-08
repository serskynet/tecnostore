// Cambia el color de fondo de la cabecera al desplazarse
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(18, 18, 18, 1)';
    } else {
        header.style.backgroundColor = 'rgba(18, 18, 18, 0.8)';
    }
});

// Habilita el desplazamiento suave cuando se hace clic en los enlaces de navegación
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Control para el menú hamburguesa en dispositivos móviles
const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burgerMenu.classList.toggle('active');
});

// Detectar cuando las secciones son visibles para activar las animaciones
const sections = document.querySelectorAll('section');
const appearOptions = {
    threshold: 0.1 // Ajusta este valor si es necesario
};

const appearOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in'); // Agregar clase fade-in al entrar
            entry.target.classList.remove('fade-out'); // Remover fade-out
        } else {
            entry.target.classList.add('fade-out'); // Agregar clase fade-out al salir
            entry.target.classList.remove('fade-in'); // Remover fade-in
        }
    });
}, appearOptions);

sections.forEach(section => {
    section.classList.add('fade-out'); // Añadir clase fade-out inicialmente
    appearOnScroll.observe(section);
});
