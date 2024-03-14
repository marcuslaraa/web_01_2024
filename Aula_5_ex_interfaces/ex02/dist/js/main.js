"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Desenvolvedor_1 = require("./Desenvolvedor");
const Gerente_1 = require("./Gerente");
function verificarFuncionario(funcionario) {
    funcionario.apresentacao();
    if (funcionario.criaSistema()) {
        console.log("É um desenvolvedor de sistemas");
    }
    else {
        console.log("Não desenvolve sistemas");
    }
}
let desenvolvedor = new Desenvolvedor_1.Desenvolvedor("Marcus", "Dev Front-end");
let gerente = new Gerente_1.Gerente("João", "Gerente de Produção");
verificarFuncionario(desenvolvedor);
verificarFuncionario(gerente);
