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
const pessoa1 = new Pessoa("Jonathas", 36);
console.log(pessoa1.comer("Lasanha"));
console.log(pessoa1.fezAniversario());

const pessoa2 = new Pessoa("Ingrid", 31);
console.log(pessoa2.comer("Arroz à grega"));
console.log(pessoa2.fezAniversario());