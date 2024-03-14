import { Animal } from "./Animal.js";

export class Mamifero implements Animal {
     nome: string;
     
     constructor(nome: string) {
        this.nome = nome;
     }

     voa(): boolean {
        return false;
     }

     anda(): boolean {
        return true;
     }

     nada(): boolean {
        return true;
     }
}