// ==============================
// 1. Traduccions
// ==============================
const texts = {
    ca: {
        title: "Ivan Ballespí",
        subtitle: "Estudiant de DAW · Sistemes · Programació",
        projectsTitle: "Projectes",
        project1Desc: "Gestió d'una Explotació Fruitera",
        project1Tech: "Tecnologies: HTML, CSS, JS, PHP",
        contactTitle: "Contacte",
        viewBtn: "Veure Codi",
        otherProjectsTitle: "Altres Projectes"
    },
    es: {
        title: "Ivan Ballespí",
        subtitle: "Estudiante de DAW · Sistemas · Programación",
        projectsTitle: "Proyectos",
        project1Desc: "Gestión de una Explotación Frutera",
        project1Tech: "Tecnologías: HTML, CSS, JS, PHP",
        contactTitle: "Contacto",
        viewBtn: "Ver Código",
        otherProjectsTitle: "Otros Proyectos"
    },
    en: {
        title: "Ivan Ballespí",
        subtitle: "DAW Student · Systems · Programming",
        projectsTitle: "Projects",
        project1Desc: "Fruit Farm Management App",
        project1Tech: "Technologies: HTML, CSS, JS, PHP",
        contactTitle: "Contact",
        viewBtn: "View Code",
        otherProjectsTitle: "Other Projects"
    }
};

// ==============================
// 2. Canvi d'idioma
// ==============================
const langSelect = document.getElementById('lang');

function changeLanguage(lang) {
    document.querySelector('.hero h1').textContent = texts[lang].title;
    document.querySelector('.subtitle').textContent = texts[lang].subtitle;
    document.querySelector('#projectes h2').textContent = texts[lang].projectsTitle;
    document.querySelector('.projecte-card h3').innerHTML = `Projecte 1 · GEF`;
    document.querySelector('.projecte-card p').textContent = texts[lang].project1Desc;
    document.querySelector('.projecte-card small').textContent = texts[lang].project1Tech;
    document.querySelector('#contacte h2').textContent = texts[lang].contactTitle;
    document.querySelector('.projects-slider h2').textContent = texts[lang].otherProjectsTitle;

    document.querySelectorAll('.btn').forEach(btn => {
        btn.textContent = texts[lang].viewBtn;
    });

    localStorage.setItem('preferredLang', lang);
}

langSelect.addEventListener('change', (e) => {
    changeLanguage(e.target.value);
});

window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'ca';
    langSelect.value = savedLang;
    changeLanguage(savedLang);
});

// ==============================
// 3. Slider “Altres Projectes”
// ==============================
const sliderTrack = document.querySelector('.slider-track');
const slides = Array.from(sliderTrack.children);
const btnNext = document.querySelector('.slider-btn.next');
const btnPrev = document.querySelector('.slider-btn.prev');

let indexActual = 0;

function actualitzaSlider() {
    if(slides.length === 0) return; // evita errors si no hi ha slides
    const ampladaSlide = slides[0].getBoundingClientRect().width + 20; // + marge
    sliderTrack.style.transform = `translateX(-${indexActual * ampladaSlide}px)`;
}

btnNext.addEventListener('click', () => {
    if(indexActual < slides.length - 1) {
        indexActual++;
        actualitzaSlider();
    }
});

btnPrev.addEventListener('click', () => {
    if(indexActual > 0) {
        indexActual--;
        actualitzaSlider();
    }
});

window.addEventListener('resize', actualitzaSlider);
