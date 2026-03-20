function criaPessoa(nome, sobrenome, idade /*Parametro*/) {
    return {
        /*nome: nome,
        sobrenome: sobrenome,
        idade: idade
        */
       nome,
       sobrenome,
       idade
    }
}

const pessoa1 = criaPessoa('Felipe', 'dos Santos Toledo', 15 /*Argumento */)
console.log(pessoa1)