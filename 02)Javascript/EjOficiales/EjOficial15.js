/* Opción 1 */
var radio = window.prompt("Introduzca un valor del radio para calcular el area y perimetro.");

const Circulo = {
    calcularArea: function(radio) {
        return (Math.PI * (radio ** 2));
    },
    calcularPerimetro: function(radio) {
        return (2 * Math.PI * radio);
    }
}

const area = Circulo.calcularArea(radio);
const perimetro = Circulo.calcularPerimetro(radio);

console.log("El area es: " + area + "\nEl perimetro es: " + perimetro);