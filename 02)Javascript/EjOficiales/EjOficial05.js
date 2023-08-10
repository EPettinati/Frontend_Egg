do {
    var operacion = window.prompt("¿Que operación desea realizar. S/R/M/D");

    var opMin = operacion.toLowerCase();
} while (opMin != "s" && opMin != "r" && opMin != "m" && opMin != "d");

let op1 = parseInt(window.prompt("Ingresa un valor")); // Se usa ParseFloat para pasar a numeros decimales
let op2 = parseInt(window.prompt("Ingresa otro valor")); // Se usa ParseFloat para pasar a numeros decimales

switch (opMin) {
    case "s":
        console.log("La suma es: " + (op1 + op2));
        break;
    case "r":
        console.log("La resta es: " + (op1 - op2));
        break;
    case "m":
        console.log("La multiplicación es: " + (op1 * op2));
        break;
    case "d":
        if (op2 != 0) {
            console.log("La división es: " + (op1 / op2));
        } else {
            console.log("No se puede dividir por: " + op2);
        }
        break;
    default:
        console.log("La operación es incorrecta.");
}