const array = ["String", 19, true, ,]

const obtenerTipoDeDato = (obtenerTipoDato) => {
    return typeof obtenerTipoDato;
};

for (let i = 0; i < array.length; i++) {
    const tipoDeDato = obtenerTipoDeDato(array[i]);
    console.log("Tipo de dato:", tipoDeDato);
}