let libro = {
    ISBN: "",
    titulo: "",
    autor: "",
    numPaginas: 0,
};

function cargarLibro(libro) {
    libro.ISBN = prompt("Ingresa el ISBN del libro:");
    libro.titulo = prompt("Ingresa el título del libro:");
    libro.autor = prompt("Ingresa el autor del libro:");
    libro.numPaginas = parseInt(prompt("Ingresa el número de páginas del libro:"));
    console.log(libro);
}

function mostrarInformacion(libro) {
    console.log("ISBN:", libro.ISBN);
    console.log("Título:", libro.titulo);
    console.log("Autor:", libro.autor);
    console.log("Número de páginas:", libro.numPaginas);
}

cargarLibro(libro); // Solicita al usuario que ingrese los datos del libro
mostrarInformacion(libro); // Muestra la información del libro