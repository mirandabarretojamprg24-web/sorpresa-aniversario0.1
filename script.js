function mostrarSeccion(id) {

    const secciones =
        document.querySelectorAll(".pantalla");


    secciones.forEach(function(seccion) {

        seccion.classList.add("oculta");

    });


    const nuevaSeccion =
        document.getElementById(id);


    nuevaSeccion.classList.remove("oculta");


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });


    crearCorazones();

}



function abrirCarta() {

    const carta =
        document.getElementById("textoCarta");


    carta.classList.remove("oculta");

}



function abrirRegalo() {

    const regalo =
        document.getElementById("regalo");


    regalo.innerHTML = "🎆";


    const mensaje =
        document.getElementById("mensajeFinal");


    mensaje.classList.remove("oculta");


    crearCorazones();

}



function crearCorazones() {

    const contenedor =
        document.getElementById("corazones");


    for(let i = 0; i < 20; i++) {

        const corazon =
            document.createElement("div");


        corazon.classList.add(
            "corazon-flotante"
        );

const tipos = [
    "❤️",
    "💕",
    "💗",
    "💖",
    "🌹",
    "✨"
];


        corazon.innerHTML =
            tipos[
                Math.floor(
                    Math.random() * tipos.length
                )
            ];


        corazon.style.left =
            Math.random() * 100 + "%";


        corazon.style.fontSize =
            (15 + Math.random() * 25) + "px";


        corazon.style.animationDuration =
            (3 + Math.random() * 3) + "s";


        contenedor.appendChild(corazon);


        setTimeout(function() {

            corazon.remove();

        }, 6000);

    }

}
const fechaInicio =
    new Date("2025-10-19T00:00:00");


function actualizarContador() {

    const ahora = new Date();

    const diferencia =
        ahora - fechaInicio;


    const segundosTotales =
        Math.floor(diferencia / 1000);


    const dias =
        Math.floor(
            segundosTotales / 86400
        );


    const horas =
        Math.floor(
            (segundosTotales % 86400) / 3600
        );


    const minutos =
        Math.floor(
            (segundosTotales % 3600) / 60
        );


    const segundos =
        segundosTotales % 60;


    document.getElementById("dias")
        .textContent = dias;


    document.getElementById("horas")
        .textContent = horas;


    document.getElementById("minutos")
        .textContent = minutos;


    document.getElementById("segundos")
        .textContent = segundos;

}


actualizarContador();


setInterval(
    actualizarContador,
    1000
);