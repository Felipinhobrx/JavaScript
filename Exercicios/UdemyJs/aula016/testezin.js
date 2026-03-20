let pessoa1 = {
    nome: 'Felipe',
    sobrenome: 'dos Santos Toledo',
    idade: 15,
    increIdade() {
        return this.idade += 1
    }
}

console.log(pessoa1.increIdade())