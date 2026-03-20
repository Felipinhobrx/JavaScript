//               0       1        2  
const alunos = ['Luiz', 'Maria', 'João']

alunos.push('Felipe')//Coloca um elemento no final
alunos.unshift('Luiza')//Coloca um elemento no começo

console.log(alunos)

let apagado1 = alunos.shift()//apagado1 = 'Luiz' remove do começo
let apagado2 = alunos.pop() //apagado2 = 'Felipe' remove do final
delete alunos[2]// apaga alunos[2]
console.log(alunos)

