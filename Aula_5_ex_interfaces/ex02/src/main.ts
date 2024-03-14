import { Desenvolvedor } from "./Desenvolvedor";
import { Funcionario } from "./Funcionario";
import { Gerente } from "./Gerente";

function verificarFuncionario (funcionario: Funcionario): void {
    funcionario.apresentacao();
    if(funcionario.criaSistema()) {
        console.log("É um desenvolvedor de sistemas");
    } else {
        console.log("Não desenvolve sistemas");
    }
}

let desenvolvedor = new Desenvolvedor("Marcus", "Dev Front-end");
let gerente = new Gerente("João", "Gerente de Produção");

verificarFuncionario(desenvolvedor);
verificarFuncionario(gerente);