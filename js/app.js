const texto_entrante = document.querySelector(".texto_ingresado");
const anchoVentana = window.innerWidth;
const largoVentana = window.innerHeight;



function asignarTexto(texto) {
    let elementoHTML = document.querySelector(".salida textarea");
    elementoHTML.innerHTML = texto;
    elementoHTML.style.textAlign = 'left';
    anchoVentana < 700 ? elementoHTML.style.marginTop = '1.5em': elementoHTML.style.marginTop = '4.5em';; 
    elementoHTML.style.color = '#495057'
    elementoHTML.style.fontWeight = 'normal';
    anchoVentana < 700 ? elementoHTML.rows = 8: elementoHTML.rows = 10;
    elementoHTML.cols = 40;
    elementoHTML = document.querySelector(".salida div");
    elementoHTML.style.height="15%";
    elementoHTML = document.querySelector(".salida button");
    elementoHTML.removeAttribute("disabled");
    elementoHTML.style.cursor="pointer";
    elementoHTML.style.opacity =100;
    anchoVentana < 700 ? elementoHTML.style.marginTop='1%': elementoHTML.style.marginTop='20%';
    if (largoVentana>700) {
        elementoHTML.style.marginTop='10%'
    }
    elementoHTML = document.querySelector(".salida div");
    anchoVentana < 380 ? elementoHTML.style.marginTop='0%':elementoHTML.style.marginTop='10%';
}

function btn_encriptar() {
    const texto_encriptado = encriptador(texto_entrante.value, true);
    ocultar();
    asignarTexto(texto_encriptado);
}

function btn_desencriptar() {
    const texto_desencriptado = encriptador(texto_entrante.value);
    ocultar();
    asignarTexto(texto_desencriptado, false);
}

function btn_copiar() {
    let copyText = document.querySelector(".salida textarea");
    copyText.select();
    document.execCommand("copy");
    alert("El texto fue copiado")
  }

function ocultar() {
    let elemento = document.querySelector(".salida h6")
    elemento.style.display = 'none';
    elemento = document.querySelector(".salida img")
    elemento.style.display = 'none';
}

function encriptador(texto, bool) {
    let matriz_codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    texto = texto.toLowerCase();
    if (bool) {
        for (let i = 0; i < matriz_codigo.length; i++) {
            if (texto.includes(matriz_codigo[i][0])) {
                texto = texto.replaceAll(matriz_codigo[i][0], matriz_codigo[i][1]);
            }
        }
    } else {
        for (let i = 0; i < matriz_codigo.length; i++) {
            if (texto.includes(matriz_codigo[i][1])) {
                texto = texto.replaceAll(matriz_codigo[i][1], matriz_codigo[i][0]);
            }
        }
    }
    return texto;
}