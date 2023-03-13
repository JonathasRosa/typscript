//readonly = apenas para leitura.
class Pessoa {
    public /*readonli*/ nome: string = "Jonathas Rosa"
}
let pessoa = new Pessoa();
console.log(pessoa.nome);
pessoa.nome = "Jhon85";
console.log(pessoa.nome)