//Elementos Formulario
const inputnombre = document.getElementById("nombre");
const inputcorreo = document.getElementById("email");
const inputmensaje = document.getElementById("mensaje");
const botoncontacto = document.getElementById("btn-contacto");
//Validación del formulario de contacto
botoncontacto.addEventListener("click", () => {
  if (
    inputnombre.value.trim() === "" ||
    inputcorreo.value.trim() === "" ||
    inputmensaje.value.trim() === ""
  ) {
    alert("Por favor, completa todos los campos.");
  } else {
    alert("¡Gracias por tu mensaje!");
    }
});