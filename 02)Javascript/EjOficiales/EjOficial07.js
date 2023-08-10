var limite = parseInt(window.prompt("Ingrese el limite"));
var suma = 0;

do {
    var num = parseInt(window.prompt("Ingrese un numero"))
    suma += num;
    console.log(suma);
} while (suma <= limite);

console.log("El limite de: " + limite + " fue superado por: " + (suma-limite));