import { Funcionario } from "./Funcionario.js";

export class Gerente implements Funcionario {
    nome: string;
    cargo: string;

    constructor(nome: string, cargo: string) {
        this.nome = nome;
        this.cargo = cargo;
    }

    apresentacao(): void {
        console.log(`Olá meu nome é ${this.nome} e o meu cargo é ${this.cargo}`);
    }

    criaSistema(): boolean {
        return false;
    }
}