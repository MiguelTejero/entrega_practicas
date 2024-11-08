function validarMayuscula(texto) {
    return /[A-Z]/.test(texto);
}

function validarCaracteresEspeciales(texto) {
    return /[!@#$%^&]/.test(texto);
}

function validarCorreo(texto) {
    return /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(texto);
}

function validarTarjetaCredito(texto) {
    return /^\d{16}$/.test(texto);
}

function validarLongitud(texto) {
    return texto.length >= 8;
}

function validarNumero(texto) {
    return /\d/.test(texto);
}

document.getElementById("mayuscula").addEventListener("input", function() {
    const esValido = validarMayuscula(this.value);
    this.style.borderColor = esValido ? "green" : "red";
})
document.getElementById("caracteres").addEventListener("input", function() {
    const esValido = validarCaracteresEspeciales(this.value);
    this.style.borderColor = esValido ? "green" : "red";
})
document.getElementById("email").addEventListener("input", function() {
    const esValido = validarCorreo(this.value);
    this.style.borderColor = esValido ? "green" : "red";
})
document.getElementById("creditcard").addEventListener("input", function() {
    const esValido = validarTarjetaCredito(this.value);
    this.style.borderColor = esValido ? "green" : "red";
})
document.getElementById("longitud").addEventListener("input", function() {
    const esValido = validarLongitud(this.value);
    this.style.borderColor = esValido ? "green" : "red";
})
document.getElementById("numero").addEventListener("input", function() {
    const esValido = validarNumero(this.value);
    this.style.borderColor = esValido ? "green" : "red";
})