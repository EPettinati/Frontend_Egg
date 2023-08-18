// Forma 1
const palabra = window.prompt("Ingrese una palabra");
let nuevaPalabra = "";

for (let i = 0; i <= palabra.length; i++) {
    nuevaPalabra += palabra.substring(i+1, i);
    nuevaPalabra += " ";
}

console.log(nuevaPalabra);

// Forma 2 
let fraseConEspacios = "";

for (let i = 0; i < palabra.length; i++) {
    fraseConEspacios += palabra[i] + " ";
}

console.log("Frase con espacios:", fraseConEspacios);