"use strict";
function validaCPF(cpf) {
    verificaPrimeiroDigito(cpf);
    return false;
}
function verificaPrimeiroDigito(cpf) {
    let soma = 0;
    for (let i = 0; i < 9; +i++) {
        soma += cpf[i] * 10 - i;
        console.log(soma);
    }
    console.log(soma);
    return false;
}
validaCPF([5, 2, 9, 9, 8, 2, 2, 4, 7, 2, 5]);
