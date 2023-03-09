enum Mes {
JAN = "Janeiro",
FEV = "Fevereiro",
MAR = "Março",
ABR = "Abril",
MAI = "Maio",
JUN = "Junho",
JUL = "Julho",
AGO = "Agosto",
SET = "Setembro",
OUT = "Outubro",
NOV = "Novembro",
DEZ = "Dezembro"
}

const pessoa: {nome: string, mesAniversario: string} = {
    nome: "Jonathas",
    mesAniversario: Mes.SET,
};
if (pessoa.mesAniversario === Mes.SET) {
    console.log(pessoa)
}