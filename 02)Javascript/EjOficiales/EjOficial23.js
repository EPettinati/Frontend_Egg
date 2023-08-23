const parrafo = document.querySelector("p");
const contenido = parrafo.textContent;
const palabras = contenido.split(" ");

parrafo.innerHTML = palabras
    .map(palabra => palabra.length > 8 ? `<span class="resaltado">${palabra}</span>` : palabra)
    .join(" ");