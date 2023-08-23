let nombre = document.querySelector('input[name="nombre"]');
let apellido = document.querySelector('input[name="apellido"]');

function getFormValores() {
    event.preventDefault();
    console.log("El nombre es: " + nombre.value)
    console.log("El apellido es: " + apellido.value)
}