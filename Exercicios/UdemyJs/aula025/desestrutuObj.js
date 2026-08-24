const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereço: {
        rua: 'Av Brasil',
        numero: 320
    }
}

console.log(pessoa.nome) 

const {nome = 'Felipe'} = pessoa
console.log(nome)