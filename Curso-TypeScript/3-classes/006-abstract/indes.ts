/* 
Classes, métodos e campos do TypeScript podem ser abstratos. Um método abstrato ou campo abstrato é aquele que não teve uma implementação fornecida.
O papel das classes abstratas é servir como uma classe base para subclasses que implementam todos os membros abstratos. Quando uma classe não possui membros abstratos, ela é chamada de concreta. 
*/
//Classes
abstract class Pessoa {
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

    protected abstract profissao: string;
    public abstract qualSuaProfissao(): string;
    public abstract qualSeuSalario(salario: number): number;
}
class Ingrid extends Pessoa {
    protected profissao: string = "Professora";
    protected salario: number = 5198
    constructor(){
        super("Ingrid", 30)
    }
    public qualSuaProfissao(): string {
        return `Sua profissão é ${this.profissao}`
    }
    public qualSeuSalario(salario: number): number {
        return salario;
    }
};
class Jonathas extends Pessoa {
    protected profissao: string = "Programador";
    protected salario: number = 8120
    
    constructor(){
        super("Jonathas", 37)
    }
    public qualSuaProfissao(): string {
        return `Sua profissão é ${this.profissao}`
    }
    public qualSeuSalario(salario: number): number {
        return salario;
    }
 };