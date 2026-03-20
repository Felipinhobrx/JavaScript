let pessoa1 = {
    nome: 'Felipe',
    sobrenome: 'dos Santos Toledo',
    idade: 15,
    engordar(peso, p) {
        return peso += p
    },
    increIdade(i) {
        this.idade += i
        return this.idade
    }
}

console.log(pessoa1.nome)
console.log(pessoa1)
console.log(pessoa1.engordar(55, 4))
console.log(pessoa1.increIdade(1))