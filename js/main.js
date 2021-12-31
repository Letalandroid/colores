// Para general

const colorVisto = document.getElementById("colorVer");
const colorMostrado = document.getElementById("colorMostrado");

// Para el color primario
const coloresPrimarios = ["red", "yellow", "blue"];

document.getElementById("cp").addEventListener("click", () => {

    let generarNumRandom = Math.round(Math.random() * 2);

    switch (generarNumRandom) {

        case 0:
            colorVisto.style.color = "#FFF";
            break;

        case 1:
            colorVisto.style.color = "#000";
            break;

        case 2:
            colorVisto.style.color = "#FFF";
            break;

        default:
            break;

    }

    colorVisto.style.background = coloresPrimarios[generarNumRandom];
    colorMostrado.innerHTML = coloresPrimarios[generarNumRandom];

});

// Para el color secundario
const coloresSecundario = ["purple", "green", "orange"];

document.getElementById("cs").addEventListener("click", () => {

    let generarNumRandom = Math.round(Math.random() * 2);

    switch (generarNumRandom) {

        case 0:
            colorVisto.style.color = "#FFF";
            break;

        case 1:
            colorVisto.style.color = "#000";
            break;

        case 2:
            colorVisto.style.color = "#FFF";
            break;

        default:
            break;

    }

    colorVisto.style.background = coloresSecundario[generarNumRandom];
    colorMostrado.innerHTML = coloresSecundario[generarNumRandom];

});

// Para random
document.getElementById("cRandom").addEventListener("click", () => {
    let number = Math.round(Math.random() * 9999999);
    let hexStr = number.toString(16);

        colorVisto.style.background = `#${hexStr}`;
        colorMostrado.innerHTML = `#${hexStr}`;

});