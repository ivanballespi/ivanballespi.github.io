/* ------------------------
   Estils generals
-------------------------*/
body {
    font-family: 'Segoe UI', sans-serif;
    background: #f5f5f5;
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none;
}

/* ------------------------
   Header amb logo i idioma
-------------------------*/
header {
    background: #333;
    color: white;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap; /* Permet adaptar-se en mòbils */
}

header .logo img {
    height: 50px;
    width: auto;
    margin-bottom: 5px;
}

header .idioma {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 5px;
}

header .idioma select {
    padding: 5px;
    border-radius: 5px;
    border: none;
}

/* ------------------------
   Main i títols
-------------------------*/
main {
    text-align: center;
    padding: 40px 20px;
}

h1 {
    font-size: 2.5em;
    margin-bottom: 10px;
}

h2 {
    font-size: 2em;
    margin-bottom: 20px;
}

/* ------------------------
   Projectes - cards
-------------------------*/
.projectes-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    margin-top: 20px;
}

.projecte-card {
    width: 250px;
    padding: 20px;
    border-radius: 15px;
    border: 3px solid #000;
    box-shadow: 4px 4px 15px rgba(0,0,0,0.2);
    transition: transform 0.3s, box-shadow 0.3s;
}

.projecte-card:hover {
    transform: translateY(-10px);
    box-shadow: 6px 6px 25px rgba(0,0,0,0.3);
}

.projecte-card h3 {
    margin-top: 0;
}

.projecte-card p {
    margin: 8px 0;
}

/* Colors per projectes */
.color1 { background: #FFDDC1; border-color: #FF9E80; }
.color2 { background: #C1FFD7; border-color: #80FF9E; }
.color3 { background: #C1D4FF; border-color: #809EFF; }

/* Botons */
.btn {
    display: inline-block;
    margin: 10px 5px 0 5px;
    padding: 8px 12px;
    background: #FF6F61;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-weight: bold;
    transition: background 0.3s;
}

.btn:hover {
    background: #FF3B2F;
}

/* ------------------------
   Contacte
-------------------------*/
section:nth-of-type(2) p {
    margin: 5px 0;
}

/* ------------------------
   Media Queries - Adaptatiu
-------------------------*/

/* Mòbils petits: menys de 480px */
@media (max-width: 480px) {
    h1 { font-size: 2em; }
    h2 { font-size: 1.5em; }

    .projecte-card {
        width: 90%; /* Cards ocupen quasi tota la pantalla */
        padding: 15px;
    }

    header {
        justify-content: center;
        text-align: center;
        gap: 10px;
    }

    header .logo img {
        height: 40px;
    }
}

/* Tablets: 481px - 768px */
@media (min-width: 481px) and (max-width: 768px) {
    .projecte-card {
        width: 45%; /* 2 cartes per fila aproximadament */
    }

    header .logo img {
        height: 45px;
    }
}

/* Pantalles mitjanes: 769px - 1024px */
@media (min-width: 769px) and (max-width: 1024px) {
    .projecte-card {
        width: 30%; /* 3 cartes per fila */
    }
}

/* Pantalles grans: més de 1025px */
@media (min-width: 1025px) {
    .projecte-card {
        width: 250px; /* Width fix per a cards grans */
    }
}
