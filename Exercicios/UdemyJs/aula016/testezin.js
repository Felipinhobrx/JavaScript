let pessoa1 = {
    nome: 'Felipe',
    sobrenome: 'dos Santos Toledo',
    idade: 15,
    increIdade(i) {
        return this.idade += i
    }
}

console.log(pessoa1.increIdade(2))