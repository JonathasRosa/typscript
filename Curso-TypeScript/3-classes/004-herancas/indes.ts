/* Getters e setters são usados para proteger seus dados, especialmente na criação de classes, para cada instância de variável, um método de setter o define oua atualiza*/
//Classes
class Pessoa {
   public nome: string = "";
   public idade: number = 0;
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

class Jonathas extends Pessoa {
    private _profissao: string = "Programador"

    constructor(){
        super("Jonathas", 37)
    }

    get profissao() {
        if (this._profissao === "Piloto de drone") {
            return `Ele não é mais um programador mudou para ${this._profissao}`;
        }
        return this._profissao;
    }
    set profissao(valor: string) {
       this._profissao = valor; 
    }
};
 
const jonathas = new Jonathas();

console.log(jonathas.profissao);
jonathas.profissao = "Piloto de drone";
console.log(jonathas.profissao);
