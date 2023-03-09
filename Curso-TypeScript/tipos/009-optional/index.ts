const fn = (nome: string, idade?: number) => {
if (!idade) {
    return `nome: ${nome}, idade: sem valor definido`;
}
return `nome: ${nome}, idade: ${idade}`;
}

console.log(fn("Jonathas", 37));
console.log(fn("Jonathas"));

const pessoa: {nome: string, idade?: number} = {nome: "Jonathas", idade: 37}