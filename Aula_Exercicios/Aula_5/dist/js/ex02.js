"use strict";
function mediaPonderada(...notas) {
    let media = 0;
    for (let i = 0; i < notas.length; i++) {
        media += notas[i].nota * notas[i].peso;
    }
    return media;
}
let nota1 = {
    nota: 4,
    peso: 0.3
};
let nota2 = {
    nota: 2,
    peso: 0.2
};
let nota3 = {
    nota: 10,
    peso: 0.5
};
console.log(mediaPonderada(nota1, nota2, nota3));
