// return // retorna um valor, termina a função

/*
function soma(a, b) {
    return (a + b)
}
*/

/*
function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome }
}

const p1 = criaPessoa('Felipe', 'Toledo')
console.log(p1)
console.log(typeof p1)
*/

/*
function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto
    }

    return falaResto
}

const fala = falaFrase('Ola')
const resto = fala('Mundo')
console.log(resto)
*/

function criaMultiplicacao(multiplicador) {
    return function(n) {
        return n * multiplicador
    }
}

const duplica = criaMultiplicacao(2)
console.log(duplica(2))

const triplica = criaMultiplicacao(3)
console.log(triplica(2))