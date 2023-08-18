const frase = prompt("Por favor, ingresa una frase:");

function palabraMasLarga(frase) {
    const palabras = frase.split(" ");
    let palabraMasLarga = "";

    console.log(palabras);

    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i].length > palabraMasLarga.length) {
            palabraMasLarga = palabras[i];
        }
    }

    return palabraMasLarga;
}

const resultado = palabraMasLarga(frase);
console.log("Palabra más larga:", resultado);