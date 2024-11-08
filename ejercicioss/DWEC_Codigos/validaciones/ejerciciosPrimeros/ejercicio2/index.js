function validateForm() {
    const nombre = document.getElementById("nombre").value.trim();
    const apellidos = document.getElementById("apellidos").value.trim();
    const dni = document.getElementById("dni").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();

    const dniRegex = /^[0-9]{8}[A-Za-z]$/;
    const telefonoRegex = /^[6-9][0-9]{8}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const usernameRegex = /^(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
    
    if (!nombre) {
        alert("El campo 'Nombre' es obligatorio.");
        return;
    }
    if (!apellidos) {
        alert("El campo 'Apellidos' es obligatorio.");
        return;
    }
    if (!dniRegex.test(dni)) {
        alert("El DNI no es válido. Debe tener 8 dígitos y una letra al final.");
        return;
    }
    if (!telefonoRegex.test(telefono)) {
        alert("El teléfono no es válido. Debe tener 9 dígitos y empezar con 6, 7, 8 o 9.");
        return;
    }
    if (!emailRegex.test(email)) {
        alert("El correo electrónico no es válido. Introduce un correo en el formato ejemplo@dominio.com.");
        return;
    }
    if (!usernameRegex.test(username)) {
        alert("El nombre de usuario debe tener al menos 8 caracteres, incluyendo un número y un signo de puntuación.");
        this.style.borderColor = "red";

        return;
    }
    
    alert("Formulario enviado correctamente");
}


function validarDNI(texto) {
    /^[0-9]{8}[A-Za-z]$/;
}
function validarTelefono(texto) {
    /^[6-9][0-9]{8}$/;
}
function validarEmail(texto) {
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
}
function validarUsuario(texto) {
    /^(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
}


document.getElementById("dni").addEventListener("input", function() {
    const esValido = validarDNI(this.value);
    this.style.borderColor = esValido ? "green" : "red";
})
document.getElementById("telefono").addEventListener("input", function() {
    const esValido = validarTelefono(this.value);
    this.style.borderColor = esValido ? "green" : "red";
})
document.getElementById("email").addEventListener("input", function() {
    const esValido = validarEmail(this.value);
    this.style.borderColor = esValido ? "green" : "red";
})
document.getElementById("usuario").addEventListener("input", function() {
    const esValido = validarUsuario(this.value);
    this.style.borderColor = esValido ? "green" : "red";
})