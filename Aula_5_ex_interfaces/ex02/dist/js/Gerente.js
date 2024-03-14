"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gerente = void 0;
class Gerente {
    constructor(nome, cargo) {
        this.nome = nome;
        this.cargo = cargo;
    }
    apresentacao() {
        console.log(`Olá meu nome é ${this.nome} e o meu cargo é ${this.cargo}`);
    }
    criaSistema() {
        return false;
    }
}
exports.Gerente = Gerente;
