const palos = ["♠", "♠", "♦", "♣"];
const valores = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
];

// Función para obtener una carta aleatoria
function obtenerCartaAleatoria() {
    const paloAleatorio = palos[Math.floor(Math.random() * palos.length)];
    const valorAleatorio = valores[Math.floor(Math.random() * valores.length)];
    return { valor: valorAleatorio, palo: paloAleatorio };
}

// Función para generar y mostrar una carta al azar
function generarYMostrarCarta() {
    const cartaValor = document.getElementById("valor");
    const cartaPaloIzquierdo = document.getElementById("palo-izquierdo");
    const cartaPaloDerecho = document.getElementById("palo-derecho");

    const cartaAleatoria = obtenerCartaAleatoria();
    cartaValor.textContent = cartaAleatoria.valor;
    cartaPaloIzquierdo.textContent = cartaAleatoria.palo;
    cartaPaloDerecho.textContent = cartaAleatoria.palo;

    // Aplicar estilos de color en función del palo
    if (cartaAleatoria.palo === "♦" || cartaAleatoria.palo === "♥") {
        // Corazón y Diamante en rojo
        cartaPaloIzquierdo.style.color = "red";
        cartaPaloDerecho.style.color = "red";
    } else {
        // Pica y Trébol en negro
        cartaPaloIzquierdo.style.color = "black";
        cartaPaloDerecho.style.color = "black";
    }
}

// Llama a la función para generar una carta al cargar la página
generarYMostrarCarta();

// Agrega un manejador de eventos al botón
const botonGenerarCarta = document.getElementById("generar-carta");
botonGenerarCarta.addEventListener("click", generarYMostrarCarta);

// Generar una carta automáticamente cada 10 segundos
setInterval(generarYMostrarCarta, 10000); // 10,000 milisegundos = 10 segundos

// Función para aplicar tamaño personalizado de la carta
function aplicarDimensiones() {
    const widthInput = document.getElementById("width-input");
    const heightInput = document.getElementById("height-input");
    const carta = document.querySelector(".carta");

    const width = widthInput.value + "px";
    const height = heightInput.value + "px";

    carta.style.width = width;
    carta.style.height = height;
}

// Agrega un manejador de eventos al botón "Aplicar Dimensiones"
const botonAplicarDimensiones = document.getElementById("aplicar-dimensiones");
botonAplicarDimensiones.addEventListener("click", aplicarDimensiones);
