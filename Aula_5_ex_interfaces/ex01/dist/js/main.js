"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ave_1 = require("./Ave");
const Mamifero_js_1 = require("./Mamifero.js");
function verificarAnimal(animal) {
    console.log(animal.nome);
    console.log(animal.voa());
    console.log(animal.anda());
    console.log(animal.nada());
}
let mamifero = new Mamifero_js_1.Mamifero("Cachorro");
let ave = new Ave_1.Ave("Galinha");
verificarAnimal(mamifero);
verificarAnimal(ave);
