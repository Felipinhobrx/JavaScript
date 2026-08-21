// (condição) ? 'Valor para verdadeiro' : 'Valor para falso'
const pontuacaoUsuario = 999
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario normal'

const corUsuario = null
const corPadrao = corUsuario || 'preto'

console.log(nivelUsuario, corPadrao)


/*
if(pontuacaoUsuario >= 1000) {
    console.log('VIP')
} else {
    console.log('pobre')
}
*/