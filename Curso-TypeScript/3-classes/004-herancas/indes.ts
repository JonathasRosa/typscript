//Classes
class Pessoa {
   protected nome: string = "";
   protected idade: number = 0;
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
    private profissao: string = "programador"
    constructor(){
        super("Jonathas", 37)
    }
    public getProfissao(){
      return `${this.nome} trabalha como programador`  
    }
 };
class Ingrid extends Pessoa {
    private profissao: string = "professora"
    constructor(){
        super("Ingrid", 30)
    }
     public getProfissao(){
      return `${this.nome} trabalha como professora`  
    }
 };

const jonathas = new Jonathas();
const ingrid = new Ingrid();

console.log(jonathas.nome);
console.log(jonathas.idade);
console.lof(jonathas.comer("Lazanha"));
console.log(jonathas.fezAniversario());
console.log(jonathas.getProfissao())
console.log(ingrid.nome);
console.log(ingrid.idade);
console.log(ingrid.comer("Pizza"));
console.log(ingrid.fezAniversario());
console.log(ingrid.getProfissao())
