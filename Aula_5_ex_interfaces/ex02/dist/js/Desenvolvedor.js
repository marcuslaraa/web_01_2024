"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Desenvolvedor = void 0;
class Desenvolvedor {
    constructor(nome, cargo) {
        this.nome = nome;
        this.cargo = cargo;
    }
    apresentacao() {
        console.log(`Olá meu nome é ${this.nome} e o meu cargo é ${this.cargo}`);
    }
    criaSistema() {
        return true;
    }
}
exports.Desenvolvedor = Desenvolvedor;
