/*
Não podemos criar constante com palavras reservadas Ex: const let = 5
Constantes precisam ter nomes significativos Ex: const n1 = 'João'
Não pode começar o nome de uma constante com um número Ex: const 1nome = 'Sla'
Não podem conter espaços ou traços Ex: const nome cliente || const nome-cliente
Usamos camelCase Ex: const nomeCompleto = 'Feudal tolete'
Case-sensitive Ex: conts nomeCliente != const nomecliente
Não pode modificar o valor de uma constante
NÃO UTILIZE VAR, UTILIZE CONST.
*/

const n1 = 5;
let n2 = 5;
const s = n1 + n2
const nome = 'Felipe'

console.log(s);
console.log( typeof(s) )
console.log( typeof nome )

n2 = '5'
console.log(typeof (n1 + n2))