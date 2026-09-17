/*
function funcao(a, b, c) {
    let total = 0
    for (let argumentos of arguments) {
        total += argumentos
    }
    console.log(total, a, b, c)
}
funcao(1, 2, 3, 4, 5)
*/

/*
function funcao(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f)
}
funcao(1, 2, 3)
*/

/*
// Se não enviar o segundo parametro is NaN
function funcao(a , b = 0, c = 4) {
    console.log(a + b + c)
}
funcao(2, undefined, 20)
*/

/*
function funcao({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade)
}
let obj = { nome: 'Felipe', sobrenome: 'Toledo', idade: 20}
funcao(obj)
*/

function conta(operador, acumulador, ...numeros) {

    for (let numero of numeros) {
        if (operador === '+') acumulador += numero
        if (operador === '-') acumulador -= numero
        if (operador === '/') acumulador /= numero
        if (operador === '*') acumulador *= numero
    }

    console.log(acumulador)
}
conta('*', 0, 6, 2, 3, 4, 5)