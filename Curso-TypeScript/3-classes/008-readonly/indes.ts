/*
    As interfaces TypeScript definem os contratos em seu código, eles também fornecem nomes explícitos para verificação de tipo.
*/

interface IPessoa {
    nome: string;
    idade: number;
    readonly cpf: number;
    enabled(): boolean;
}
let pessoa: IPessoa = {
    nome: "Jonathas", idade: 37, cpf: 0o15013, enabled: () => {
        return true;
    }
};

class Joao implements IPessoa {
    nome: string = "João";
    idade: number = 63;
    readonly cpf: number = 12345659546;
    enabled(): boolean{
        return true
    };
}