const pessoa = {
    //nome: 'arthur',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
}
/*
console.log(pessoa.nome) 
//             v-- Valor padrão caso não exista a variavel
const {nome = 'Felipe'} = pessoa; 
console.log(nome)
*/
/*
const {endereco: {rua, numero}} = pessoa
console.log(rua, numero)
*/
const {nome = 'Felipe', ...resto } = pessoa
console.log(nome, resto)