function canviarIdioma(lang) {
    // Només un exemple ràpid de com canviar textos
    if(lang === 'es') {
        document.querySelector('h1').textContent = "Iván Ballespí";
        document.querySelector('p').textContent = "Estudiante de DAW · Sistemas · Programación";
        document.querySelector('h2').textContent = "Proyectos";
    } else if(lang === 'en') {
        document.querySelector('h1').textContent = "Ivan Ballespí";
        document.querySelector('p').textContent = "DAW Student · Systems · Programming";
        document.querySelector('h2').textContent = "Projects";
    } else {
        document.querySelector('h1').textContent = "Ivan Ballespí";
        document.querySelector('p').textContent = "Estudiant de DAW · Sistemes · Programació";
        document.querySelector('h2').textContent = "Projectes";
    }
}
