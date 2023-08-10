/* Opción 1 */
var radio1 = window.prompt("Introduzca un valor del radio para calcular el area y perimetro.");

const PI =  3.141592653589793;

let area1 = (PI * (radio1*radio1));
let perimetro1 = (2 * PI * radio1);

console.log("El area es: " + area1 + "\nEl perimetro es: " + perimetro1);

/* Opción 2 */

var radio = window.prompt("Introduzca un valor del radio para calcular el area y perimetro.");

let area = (PI * (radio*radio));
let perimetro = (2 * PI * radio);

/* Concatenación de valores */

var respuesta = `El area es: ${area} 
El perimetro es: ${perimetro}`;

console.log(respuesta);