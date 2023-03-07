let array1: [string, string, number, boolean] = [
    "Jonathas",
    "Ingrid",
    16.10,
    true
];

let array2: Array<string | number | boolean> = [
    true,
    16.10,
    "jonathaseingrid"
];

console.log(array1);
console.log(array2);

let obj1: { nome: string, sobrenome: string, idade: number, deuBom: boolean } = {
    nome: "Jonathas",
    sobrenome: "Rosa",
    idade: 37,
    deuBom: true,
};
let obj2: Array<{ nome: string, sobrenome: string, idade: number, deuBom: boolean }> = [
    {
        nome: "Jonathas",
        sobrenome: "Rosa",
        idade: 37,
        deuBom: true,
    },
    {
        nome: "jefferson",
        sobrenome: "Rosa",
        idade: 36,
        deuBom: true,
    },
    {
        nome: "Junior",
        sobrenome: "Rosa",
        idade: 35,
        deuBom: false,
    }
];

console.log(obj1);
console.log(obj2);