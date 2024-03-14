import { Animal } from "./Animal.js";
import { Ave } from "./Ave";
import { Mamifero } from "./Mamifero.js";

function verificarAnimal(animal: Animal) {
    console.log(animal.nome);
    console.log(animal.voa());
    console.log(animal.anda());
    console.log(animal.nada());
}

let mamifero = new Mamifero("Cachorro");
let ave = new Ave("Galinha");

verificarAnimal(mamifero);
verificarAnimal(ave);