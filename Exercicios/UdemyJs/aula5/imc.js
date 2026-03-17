//IMC == Indice Massa Corporal
//IMC == Peso / (Altuta * Altura)

const nome = 'Felipe'
const sobrenome = 'Dos Santos'

const idade = 16
const peso = 84
const altura = 1.80 // Metros

let data = new Date()
const anoAtual = data.getFullYear() //NÃO ESQUEÇA O PARENTESESSSS

let anoNascimento;
anoNascimento = anoAtual - idade
//console.log(anoNascimento)

let imc;
imc = peso / (altura * altura)

console.log(nome, sobrenome, 'com', idade, 'anos', peso, 'Kg', altura+ 'M de altura e nasceu em', anoNascimento, 'tem um IMC(Indice Massa Corporal) de', imc)

console.log('---------------------------------------------------------------------------------------------------------------------------')

//Template Strings
console.log(`${nome} ${sobrenome} com ${idade} anos ${peso} Kg ${altura}M de altura e nasceu em ${anoNascimento} tem um IMC(Indice Massa Corporal) de ${imc}`)