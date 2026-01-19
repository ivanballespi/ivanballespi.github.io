// 1. Definició de les traduccions
const texts = {
    ca: {
        title: "Ivan Ballespí",
        subtitle: "Estudiant de DAW · Sistemes · Programació",
        projectsTitle: "Projectes",
        project1Desc: "Gestió d'una Explotació Fruitera",
        project1Tech: "Tecnologies: HTML, CSS, JS, PHP",
        contactTitle: "Contacte",
        viewBtn: "Veure Codi"
    },
    es: {
        title: "Ivan Ballespí",
        subtitle: "Estudiante de DAW · Sistemas · Programación",
        projectsTitle: "Proyectos",
        project1Desc: "Gestión de una Explotación Frutera",
        project1Tech: "Tecnologías: HTML, CSS, JS, PHP",
        contactTitle: "Contacto",
        viewBtn: "Ver Código"
    },
    en: {
        title: "Ivan Ballespí",
        subtitle: "DAW Student · Systems · Programming",
        projectsTitle: "Projects",
        project1Desc: "Fruit Farm Management App",
        project1Tech: "Technologies: HTML, CSS, JS, PHP",
        contactTitle: "Contact",
        viewBtn: "View Code"
    }
};

// 2. Selecció d'elements de l'HTML (afegim IDs al teu HTML)
const langSelect = document.getElementById('lang');

// Funció per canviar els textos
function changeLanguage(lang) {
    // Busquem els elements pels IDs que hem definit a l'HTML
    document.querySelector('.hero h1').textContent = texts[lang].title;
    document.querySelector('.subtitle').textContent = texts[lang].subtitle;
    document.querySelector('#projectes h2').textContent = texts[lang].projectsTitle;
    document.querySelector('.projecte-card h3').innerHTML = `Projecte 1 · GEF`; // El títol es manté similar
    document.querySelector('.projecte-card p').textContent = texts[lang].project1Desc;
    document.querySelector('.projecte-card small').textContent = texts[lang].project1Tech;
    document.querySelector('#contacte h2').textContent = texts[lang].contactTitle;
    
    // Canviar text de tots els botons (si en tinguessis més)
    document.querySelectorAll('.btn').forEach(btn => {
        btn.textContent = texts[lang].viewBtn;
    });

    // Guardar la preferència a l'ordinador de l'usuari
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
