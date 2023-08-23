let diametro = document.getElementById("diametro");
let mensaje = document.getElementById("mensaje");

function checkResult() {
    let numeroIngresado = parseFloat(diametro.value);

    const resultado = (numeroIngresado / 2);
    mensaje.textContent = "El radio es: " + resultado;
}