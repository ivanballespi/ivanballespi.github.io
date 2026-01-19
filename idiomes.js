// Seleccionem el desplegable
const selectorIdioma = document.getElementById('lang');

// Mirem tots els elements que cal traduir
const textos = {
    header: {
        label: {
            ca: "Idioma:",
            es: "Idioma:",
            en: "Language:"
        }
    },
    main: {
        h1: {
            ca: "Ivan Ballespí",
            es: "Iván Ballespí",
            en: "Ivan Ballespí"
        },
        p: {
            ca: "Estudiant de DAW · Sistemes · Programació",
            es: "Estudiante de DAW · Sistemas · Programación",
            en: "DAW Student · Systems · Programming"
        }
    },
    projectes: {
        h2: {
            ca: "Projectes",
            es: "Proyectos",
            en: "Projects"
        },
        projecte1: {
            h3: {
                ca: "Projecte 1 · GEF",
                es: "Proyecto 1 · GEF",
                en: "Project 1 · GEF"
            },
            p1: {
                ca: "Aplicació sobre la Gestió d'una Explotació Fruitera",
                es: "Aplicación sobre la Gestión de una Explotación Frutal",
                en: "Application for the Management of a Fruit Farm"
            },
            p2: {
                ca: "Fet amb: HTML, CSS, JS, PHP",
                es: "Hecho con: HTML, CSS, JS, PHP",
                en: "Made with: HTML, CSS, JS, PHP"
            },
            btnCodi: {
                ca: "Veure codi",
                es: "Ver código",
                en: "View code"
            },
            btnDemo: {
                ca: "Veure demo",
                es: "Ver demo",
                en: "View demo"
            }
        }
    },
    contacte: {
        h2: {
            ca: "Contacte",
            es: "Contacto",
            en: "Contact"
        }
    }
};

// Funció que canvia l’idioma
function canviarIdioma(lang) {
    // Header
    document.querySelector('label[for="lang"]').textContent = textos.header.label[lang];

    // Main
    document.querySelector('main h1').textContent = textos.main.h1[lang];
    document.querySelector('main > p').textContent = textos.main.p[lang];

    // Projectes
    document.querySelector('section:nth-of-type(1) h2').textContent = textos.projectes.h2[lang];
    document.querySelector('.projecte-card h3').textContent = textos.projectes.projecte1.h3[lang];
    const pElements = document.querySelectorAll('.projecte-card p');
    pElements[0].textContent = textos.projectes.projecte1.p1[lang];
    pElements[1].textContent = textos.projectes.projecte1.p2[lang];
    const btns = document.querySelectorAll('.projecte-card .btn');
    btns[0].textContent = textos.projectes.projecte1.btnCodi[lang];
    btns[1].textContent = textos.projectes.projecte1.btnDemo[lang];

    // Contacte
    document.querySelector('section:nth-of-type(2) h2').textContent = textos.contacte.h2[lang];
}

// Afegim l’escoltador d’esdeveniments
selectorIdioma.addEventListener('change', function() {
    canviarIdioma(this.value);
});
