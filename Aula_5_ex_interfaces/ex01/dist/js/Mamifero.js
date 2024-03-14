"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mamifero = void 0;
class Mamifero {
    constructor(nome) {
        this.nome = nome;
    }
    voa() {
        return false;
    }
    anda() {
        return true;
    }
    nada() {
        return true;
    }
}
exports.Mamifero = Mamifero;
