// Elementos
const formulario = document.querySelector('.contacto__formulario');
const campoNombre = document.getElementById('nombre');
const campoAsunto = document.getElementById('asunto');
const campoMensaje = document.getElementById('mensaje');
const campos = document.querySelectorAll('.contacto__campo');
const botonEnviar = document.querySelector('.contacto__boton');
const mensajeError = document.querySelector('.contacto__mensaje');

// Función para validar el campo Nombre
function validarNombre() {
    const nombre = campoNombre.value.trim(); // Eliminar espacios en blanco al inicio y al final

    // Limpiar mensaje previo
    let error = '';
    if (nombre.length > 50) {
        error = 'El campo "Nombre" no puede exceder los 50 caracteres.';
    }

    // Si hay error, mostrarlo y enfocar el campo
    if (error) {
        mensajeError.textContent = error;
        campoNombre.focus();
        campoNombre.style.borderColor = '#A7D129';
        return false;
    }

    return true; // Validación exitosa
}

// Función para validar el campo Asunto
function validarAsunto() {
    const asunto = campoAsunto.value.trim(); // Eliminar espacios en blanco al inicio y al final

    // Limpiar mensaje previo
    let error = '';
    if (asunto.length > 50) {
        error = 'El campo "Asunto" no puede exceder los 50 caracteres.';
    }

    // Si hay error, mostrarlo y enfocar el campo
    if (error) {
        mensajeError.textContent = error;
        campoAsunto.focus();
        campoAsunto.style.borderColor = '#A7D129';
        return false;
    }

    return true; // Validación exitosa
}

// Función para validar el campo Mensaje
function validarMensaje() {
    const mensaje = campoMensaje.value.trim(); // Eliminar espacios en blanco al inicio y al final

    // Limpiar mensaje previo
    let error = '';
    if (mensaje.length > 30) {
        error = 'El campo "Mensaje" no puede exceder los 30 caracteres.';
    }

    // Si hay error, mostrarlo y enfocar el campo
    if (error) {
        mensajeError.textContent = error;
        campoMensaje.focus();
        campoMensaje.style.borderColor = '#A7D129';
        return false;
    }

    return true; // Validación exitosa
}

// Función para comprobar si todos los campos están llenos
function comprobarCampos() {
    // Comprobamos si todos los campos están llenos
    let todosCompletos = true;
    campos.forEach(campo => {
        if (campo.value.trim() === '') {
            todosCompletos = false;
        }
    });

    // Si todos los campos están completos, habilitamos el botón
    if (todosCompletos) {
        botonEnviar.disabled = false;
    } else {
        botonEnviar.disabled = true; // Si hay campos vacíos, deshabilitamos el botón
    }
}

// Escuchamos el evento de envío del formulario
formulario.addEventListener('submit', (event) => {
    // Limpiar mensajes antes de validación
    mensajeError.textContent = '';

    let validadoNombre = validarNombre();
    let validadoAsunto = validarAsunto();
    let validadoMensaje = validarMensaje();

    // Si alguno de los campos es inválido, evitar el envío del formulario
    if (!validadoNombre || !validadoAsunto || !validadoMensaje) {
        event.preventDefault();
    }
});

// Escuchar el evento 'input' en todos los campos
campos.forEach(campo => {
    campo.addEventListener('input', comprobarCampos); // Verifica si los campos cambian
});

// Inicializar el estado del botón
comprobarCampos();