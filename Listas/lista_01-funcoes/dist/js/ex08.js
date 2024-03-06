"use strict";
function reverteString(texto) {
    let separa = texto.split("");
    let junta = separa.reverse().join("");
    return junta;
}
console.log(reverteString('marcus'));
