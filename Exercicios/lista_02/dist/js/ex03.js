"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function conversorStringParaNumber(texto) {
    let stringArray = texto.split('');
    return stringArray.map(Number);
}
function verificaPrimeiroDigito(cpf) {
    let soma = 0;
    for (let i = 0; i < 9; +i++) {
        soma += cpf[i] * (10 - i);
    }
    let resto = (soma * 10) % 11;
    if (resto == 10) {
        resto = 0;
    }
    if (resto == cpf[9]) {
        return true;
    }
    return false;
}
function verificaSegundoDigito(cpf) {
    let soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += cpf[i] * (11 - i);
    }
    let resto = (soma * 10) % 11;
    if (resto == cpf[10]) {
        return true;
    }
    return false;
}
function validaCPF(cpf) {
    if (verificaPrimeiroDigito(cpf) && verificaSegundoDigito(cpf)) {
        return true;
    }
    return false;
}
if (validaCPF(conversorStringParaNumber('52998224725'))) {
    console.log("CPF validado com sucesso!!!");
}
else {
    console.log("CPF INVÁLIDO!!!");
}
