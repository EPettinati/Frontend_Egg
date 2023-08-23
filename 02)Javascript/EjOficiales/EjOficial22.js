let pulsar = document.getElementById("Click");
let parraf = document.getElementById("parrafo");

pulsar.addEventListener("click", function() {
    console.log("Se hizo click en el boton");
    parraf.textContent = "Se hizo click y cambie.";
});