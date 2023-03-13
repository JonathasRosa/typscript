/* 
    1 - Public: Pode ser acessado tanto pela mesma class, classes filhas e outras classes.
    2 - Protected: Pode ser acessado tanto pela mesma class, classes filhas, mas não pode ser acessado outras classes.
    3 - Private: Pode ser acessado somente pela própria classe.

*/
//Classes

class Pessoa {
    public nome: string = "";
    public idade: number = 0;

    private _profissao: string = "Programador";
    
    //Inicializador
    constructor(nome: string, idade: number) {
        this.nome = nome
        this.idade = idade
    }
    //Métodos
    public comer(comida: string) {
        return `O ${this.nome} comeu ${comida}`;
    }
    public fezAniversario() {
        return `O ${this.nome} fez ${++this.idade} anos.`
    }

}
    
const pessoa = new Pessoa("Jonathas", 37)