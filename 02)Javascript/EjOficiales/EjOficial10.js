const frase = prompt("Por favor, ingresa una frase:");
const fraseConEspacios = () => {
    let result = " ";
    for (let i = frase.length-1; i >= 0; i--) {
        result += frase[i];
    }
    return result;
};

console.log("Frase con espacios:", fraseConEspacios());
