/* 
    1 - Public: Pode ser acessado tanto pela mesma class, classes filhas e outras classes.
    2 - Protected: Pode ser acessado tanto pela mesma class, classes filhas, mas não pode ser acessado outras classes.
    3 - Private: Pode ser acessado somente pela própria classe.

*/
//Classes
class Pessoa {
    nome: string = "";
    idade: number = 0;
    //Inicializador
    constructor(nome: string, idade: number) {
        this.nome = nome
        this.idade = idade
    }
    //Métodos
    comer(comida: string) {
        return `O ${this.nome} comeu ${comida}`;
    }
    fezAniversario() {
        return `O ${this.nome} fez ${++this.idade} anos.`
    }
}