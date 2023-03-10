var Mes;
(function (Mes) {
    Mes["JAN"] = "Janeiro";
    Mes["FEV"] = "Fevereiro";
    Mes["MAR"] = "Marco";
    Mes["ABR"] = "Abril";
    Mes["MAI"] = "Maio";
    Mes["JUN"] = "Junho";
    Mes["JUL"] = "Julho";
    Mes["AGO"] = "Agosto";
    Mes["SET"] = "Setembro";
    Mes["OUT"] = "Outubro";
    Mes["NOV"] = "Novembro";
    Mes["DEZ"] = "Dezembro";
})(Mes || (Mes = {}));
var pessoa = {
    nome: "Jonathas",
    mesAniversario: Mes.SET
};
if (pessoa.mesAniversario === Mes.SET) {
    console.log(pessoa);
}
