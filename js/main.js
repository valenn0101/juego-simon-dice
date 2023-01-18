let $estado = document.getElementById("estado");
let nivel = 0;
const $ronda = document.getElementById("ronda");
const botonRojo = document.getElementById("rojo");
const botonVerde = document.getElementById("verde");
const botonAzul = document.getElementById("azul");
const botonAmarillo = document.getElementById("amarillo");
const tableroDeJuego = document.getElementById("tablero");
const tablero = [botonRojo, botonVerde, botonAzul, botonAmarillo];
const infoDificultad = document.querySelectorAll(".infoDificultad");
const mensajeFlotante = document.getElementById("mensajeFlotante");
let patronMaquina = [];
let patronUsuario = [];

document
  .getElementById("iniciar-juego")
  .addEventListener("click", comenzarJuego);
botonRojo.addEventListener("click", presionarBoton);
botonVerde.addEventListener("click", presionarBoton);
botonAzul.addEventListener("click", presionarBoton);
botonAmarillo.addEventListener("click", presionarBoton);

infoDificultad.onmouseover = function () {
  mensajeFlotante.style.display = "block";
};
infoDificultad.onmouseout = function () {
  mensajeFlotante.style.display = "none";
};

function comenzarJuego() {
  nuevoNivel();
  document.getElementById("iniciar-juego").disabled = true;
}

function nuevoNivel() {
  $estado.innerText = "Turno de la maquina!";
  botonRojo.classList.add("turno-maquina");
  botonVerde.classList.add("turno-maquina");
  botonAzul.classList.add("turno-maquina");
  botonAmarillo.classList.add("turno-maquina");

  setTimeout(() => {
    if(nivelDeJuego == 1){
      imprimirPatronMaquina(patronMaquina);
    }
    nivel = nivel + 1;
    $ronda.innerText = nivel;
    let siguientePatron = Math.floor(Math.random() * 4);
    let siguienteColor = tablero[siguientePatron];
    señalarColor(siguienteColor);
    siguienteColor.classList.remove("turno-maquina");
    patronMaquina.push(siguienteColor);
    $estado.innerText = "Tu turno!";
    setTimeout(() => {
      botonRojo.classList.remove("turno-maquina");
      botonVerde.classList.remove("turno-maquina");
      botonAzul.classList.remove("turno-maquina");
      botonAmarillo.classList.remove("turno-maquina");
    }, 500);
  }, 1000);
}

function señalarColor(tablero) {
  tablero.classList.add("señalar");
  setTimeout(() => {
    tablero.classList.remove("señalar");
  }, 400);
}

function presionarBoton(event) {
  if ($estado.innerText === "Tu turno!") {
    let boton = event.target;
    señalarColor(boton);
    patronUsuario.push(boton);
    if (boton === patronMaquina[patronUsuario.length - 1]) {
      if (patronMaquina.length === patronUsuario.length) {
        nuevoNivel();
        patronUsuario = [];
      }
    } else {
      $estado.innerText = "Perdiste!";
      tableroDeJuego.classList.add("turno-maquina");
      $estado.classList.remove("alert-primary");
      $estado.classList.add("alert-danger");
      setTimeout(() => {
        location.reload();
      }, 1600);
    }
  }
}

function imprimirPatronMaquina(patronMaquina) {
  const historialDeColores = document.getElementById("historial");
  historialDeColores.innerText = "";
  patronMaquina.forEach( color => {
    const $patron = document.createElement("li");
    $patron.innerText = color.value;
    historialDeColores.appendChild($patron);
  });
}