import { Animal } from "./Animal.js";

export class Ave implements Animal {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    voa(): boolean {
        return true;
    }

    anda(): boolean {
        return false;
    }

    nada(): boolean {
        return true;
    }
}