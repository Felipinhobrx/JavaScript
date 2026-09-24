function retornaFuncao(nome) {
    return function() {
        return nome
    }
}

const funcao = retornaFuncao('felipe')
console.log(funcao())
