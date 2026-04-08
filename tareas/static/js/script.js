
function resaltarInput(input) {
    input.style.border = "3px solid #007bff";
    input.style.boxShadow = "0 0 10px rgba(0,123,255,0.3)";
}
function validarFormulario(formulario) {
    let nombre = formulario.nombre.value.trim();
    let edad = formulario.edad.value;
    document.getElementById("mensaje").textContent = "";
    if (nombre === "") {
        mostrarError("El nombre no puede estar vacío");
        return false; 
    }
    if (edad === "" || edad <= 0 || edad > 120) {
        mostrarError("La edad debe ser un número válido (1-120)");
        return false;
    }
    mostrarExito("¡Registro exitoso! Formulario limpio.");
    formulario.reset();
    return false;
}
function mostrarError(mensaje) {
    let mensajeElemento = document.getElementById("mensaje");
    mensajeElemento.textContent = mensaje;
    mensajeElemento.style.color = "red";
    mensajeElemento.style.backgroundColor = "#ffe6e6";
}
function mostrarExito(mensaje) {
    let mensajeElemento = document.getElementById("mensaje");
    mensajeElemento.textContent = mensaje;
    mensajeElemento.style.color = "green";
    mensajeElemento.style.backgroundColor = "#e6ffe6";
}