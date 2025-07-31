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
//Test de Seguridad
function mostrarTest() {
    document.getElementById('modalTest').style.display = 'block'; // Mostrar el popup
}
function cerrarTest() {
    document.getElementById('modalTest').style.display = 'none'; // Ocultar el popup
}
document.addEventListener('DOMContentLoaded', function() {
    const enviarRespuestasBtn = document.querySelector('.modal-content button[type="submit"]');

    const respuestasCorrectas = {
        pregunta1: 'pregunta1respuesta2',
        pregunta2: 'pregunta2respuesta2',
        pregunta3: 'pregunta3respuesta2'
    };
    if (enviarRespuestasBtn) {
        enviarRespuestasBtn.addEventListener('click', procesarTest);
    }
    function procesarTest() {
        let puntaje = 0;

        for (const pregunta in respuestasCorrectas) {
            const respuestaSeleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);
            if (respuestaSeleccionada && respuestaSeleccionada.id === respuestasCorrectas[pregunta]) {
                puntaje++;
            }
        }

        alert(`Tu puntaje es: ${puntaje} de ${Object.keys(respuestasCorrectas).length}`);
    }
});