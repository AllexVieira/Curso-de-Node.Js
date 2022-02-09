// Calculadora básica com números fixos e com as funções sendo executadas em arquivos .Js separados na pasta Modulos.
//
var SomaFunc = require("./Modulos/somar")
var SubFunc = require("./Modulos/sub")
var MultFunc = require("./Modulos/multi")
var DivFunc = require("./Modulos/div")


console.log(SomaFunc(1,2))
console.log(SubFunc(1,2))
console.log(MultFunc(1,2))
console.log(DivFunc(1,2))