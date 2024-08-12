//---Seleccionar los elementos
const btnEncriptar = document.querySelector(".btn-encriptar");
const textEncriptar = document.querySelector(".encriptar");
const aviso = document.querySelector(".texto-aviso");
const textEvaluar = document.querySelector(".evaluar");
const imgMuneco = document.querySelector(".tarjeta-contenedor");
const btnCopiar = document.querySelector(".btn-copiar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");
const mensajecopiado = document.querySelector(".texto-dos");

// Pie de Página - Año
const yearSpan = document.querySelector("#year");
const year = new Date();
yearSpan.innerText= year.getFullYear();

// Boton de Encriptar

btnEncriptar.addEventListener("click", (e) => {
    e.preventDefault();
    let texto = textEncriptar.value;
    let txt = texto
        .normalize("NFD")
        .replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

        if (texto == "") {
            aviso.style.color = "#FFFF00";
            aviso.style.fontWeight = "450";
            
            aviso.textContent =
                "El campo no debe estar vacío ";
            setTimeout(() => {
                aviso.removeAttribute("style");
            }, 1500);
            textEncriptar.value = "";
        }
        else if (texto !== txt) {
            aviso.style.color = "#FFFF00";
            aviso.style.fontWeight = "450";
            aviso.textContent =
                "El texto no debe contener caracteres especiales";
            setTimeout(() => {
                aviso.removeAttribute("style");
            }, 1500);
            textEncriptar.value = "";
        }
        else if (texto !== texto.toLowerCase()) {
            aviso.style.color = "#FFFF00";
            aviso.style.fontWeight = "450";
            aviso.textContent =
                "El texto debe ser en minúsculas y sin acentos";
            setTimeout(() => {
                aviso.removeAttribute("style");
            }, 1500);
            textEncriptar.value = "";
        }
    // - La letra "e" es convertida para "enter"
    // - La letra "i" es convertida para "imes"
    // - La letra "a" es convertida para "ai"
    // - La letra "o" es convertida para "ober"
    // - La letra "u" es convertida para "ufat"
    else {
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/u/mg, "ufat");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");

        textEvaluar.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        imgMuneco.remove();
        textEncriptar.value = "";

    }
});

// Boton de Desencriptar

btnDesencriptar.addEventListener("click", (e) => {
    e.preventDefault();
    let texto = textEncriptar.value;
    let txt = texto
        .normalize("NFD")
        .replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    if (texto == "") {
        aviso.style.color = "#FFFF00";
        aviso.style.fontWeight = "450";
        aviso.textContent =
            "El campo no debe estar vacío ";
        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
        textEncriptar.value = "";
    }
    else if (texto !== txt) {
        aviso.style.color = "#FFFF00";
        aviso.style.fontWeight = "450";
        aviso.textContent =
            "El texto no debe contener caracteres especiales";
        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
        textEncriptar.value = "";
    }
    else if (texto !== texto.toLowerCase()) {
        aviso.style.color = "#FFFF00";
        aviso.style.fontWeight = "450";
        aviso.textContent =
            "El texto debe ser en minúsculas y sin acentos";
        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
        textEncriptar.value = "";
    }
    // - La letra "e" es convertida para "enter"
    // - La letra "i" es convertida para "imes"
    // - La letra "a" es convertida para "ai"
    // - La letra "o" es convertida para "ober"
    // - La letra "u" es convertida para "ufat"
    else {

        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ufat/mg, "u");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");

        textEvaluar.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        imgMuneco.remove();
        textEncriptar.value = "";

    }
});

// Boton de Copiar
btnCopiar.addEventListener("click", (e) => {
    e.preventDefault();
    let copiar = textEvaluar;
    copiar.select();
    document.execCommand("copy");
});


