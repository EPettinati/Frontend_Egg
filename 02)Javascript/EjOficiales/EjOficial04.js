var respuesta = window.prompt("Ingrese caracteres");

console.log(respuesta);

var min = respuesta.toLowerCase(); // Convierte en minuscula la letra introducida

console.log(min);

/* Hecho con un IF */

if (min === "s" || min == "n") {
    console.log("CORRECTO con IF");
} else {
    console.log("INCORRECTO con IF");
}

/* Hecho con IF Ternario */

var ifTernario = (min === "s" || min == "n") ? "CORRECTO con IF Ternario" : "INCORRECTO con IF Ternario";

console.log(ifTernario);

/* Hecho con Switch */

switch (min) {
    case 's':
        console.log("CORRECTO con SWITCH");
        break;
    case 'n':
        console.log("CORRECTO con SWITCH");
        break;
    default:
        console.log("INCORRECTO con SWITCH");
}