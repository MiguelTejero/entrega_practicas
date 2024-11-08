window.onload = () => {
    document.getElementById("inicio").addEventListener("click", () => {
        iniciaPartida();
    });
    let listaDivs = document.getElementsByClassName("cuadrado");
    for (let cuadrado of listaDivs) {
        cuadrado.addEventListener("click", compruebaAcierto);
    }
}

function compruebaAcierto(e) {
    if (e.target.style.backgroundColor === document.getElementById("colorBuscar").innerText) {
        console.log("Encontrado");
        iniciaPartida();
    } else {
        console.log("Has fallado");
    }
}

function iniciaPartida() {
    let listaDivs = document.getElementsByClassName("cuadrado");
    for (let cuadrado of listaDivs) {
        cuadrado.style.backgroundColor = `rgb(${colorAleatorio()})`;
    }
    let solucion = Math.floor(Math.random() * listaDivs.length);
    document.getElementById("colorBuscar").innerText = listaDivs[solucion].style.backgroundColor;
}

function colorAleatorio() {
    let arrayColor = [];
    for (let i = 0; i < 3; i++) {
        arrayColor[i] = Math.trunc(Math.random() * 256);
    }
    return arrayColor.join(", ");
}


