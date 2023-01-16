let $estado = document.getElementById("estado");
let nivel = 0;
const $ronda = document.getElementById("ronda");
const botonRojo = document.getElementById("rojo");
const botonVerde = document.getElementById("verde");
const botonAzul = document.getElementById("azul");
const botonAmarillo = document.getElementById("amarillo");

const botonIniciar = document.getElementById("iniciar-juego")

botonIniciar.onclick = function comenzarJuego(){
    subirNivel()
}

function subirNivel(){
    setTimeout(() =>{
        nivel = nivel + 1;
        $ronda.innerText = nivel
    }, 1000)
}