let valores = [true, 5, false, "hola", "adios", 2];

function palabraLarga(valores) {
    let palabraMasLarga = "";
    for (let i = 0; i < valores.length; i++) {
        if (valores[i].length > palabraMasLarga.length) {
            palabraMasLarga = valores[i];
        }
    }
    
    return console.log("Palabra más larga:", palabraMasLarga);
}


// Acá no entendí una goma que es lo que había que hacer, así que hice esto.
function booleanos(valores) {
    const boolean1 = valores[0];
    const boolean2 = valores[2];

    const resultadoTrue = boolean1 && boolean2;
    const resultadoFalse = boolean1 || boolean2;
    
    return console.log("El resultado True es: " + resultadoTrue + " y el resultado False es: " + resultadoFalse)
}

// Estimo que con 5 operaciones matematicas se refiere al resto(Modulo)
function operacionMat(valores) {
    const op1 = valores[1];
    const op2 = valores[5];

    return console.log("La suma es: " + (op1 + op2) + ", la resta es: " + (op1 - op2) + ", la multiplicación es: " + (op1 * op2) + ", la división es: " + (op1 / op2) + ", el modulo es: " + (op1 % op2));
}

const resultado = palabraLarga(valores);
const resulBoolean = booleanos(valores);
const opMat = operacionMat(valores);