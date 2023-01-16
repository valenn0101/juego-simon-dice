let $estado = document.getElementById("estado");
let nivel = 0;
const $ronda = document.getElementById("ronda");
const botonRojo = document.getElementById("rojo");
const botonVerde = document.getElementById("verde");
const botonAzul = document.getElementById("azul");
const botonAmarillo = document.getElementById("amarillo");
const tablero = [botonRojo, botonVerde, botonAzul, botonAmarillo];
let patronMaquina = [];
let patronUsuario = [];

document.getElementById("iniciar-juego").addEventListener("click", comenzarJuego);
botonRojo.addEventListener("click", presionarBoton);
botonVerde.addEventListener("click", presionarBoton);
botonAzul.addEventListener("click", presionarBoton);
botonAmarillo.addEventListener("click", presionarBoton);


function comenzarJuego() {
  nuevoNivel();
}

function nuevoNivel() {
  $estado.innerText = "Turno de la maquina!";
  setTimeout(() => {
    nivel = nivel + 1;
    $ronda.innerText = nivel;
    let siguientePatron = Math.floor(Math.random() * 4);
    let siguienteColor = tablero[siguientePatron];

    señalarColor(siguienteColor);
    patronMaquina.push(siguienteColor);
    $estado.innerText = "Tu turno!";
  }, 1000);
}

function señalarColor(tablero) {
  tablero.classList.add("señalar");
  setTimeout(() => {
    tablero.classList.remove("señalar");
  }, 400);
}

function presionarBoton(event) {
    if($estado.innerText === "Tu turno!"){
        let boton = event.target;
        señalarColor(boton);
        patronUsuario.push(boton);
        if (boton === patronMaquina[patronUsuario.length-1]) {
            if (patronMaquina.length === patronUsuario.length) {
                nuevoNivel();
                patronUsuario = [];
            }
        }else{
            $estado.innerText = "Perdiste!"
            $estado.classList.remove("alert-primary");
            $estado.classList.add("alert-danger");
            setTimeout(() => {
                location.reload();
            }, 1000);
        }
    }
}

