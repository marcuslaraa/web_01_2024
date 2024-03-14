export interface Funcionario {
    nome: string,
    cargo: string,
    apresentacao(): void,
    criaSistema(): boolean
}