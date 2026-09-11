function mostraHora() {
    let data = new Date()

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

//console.log(mostraHora())

/*
function interval() {
    console.log (mostraHora())
}

setInterval(interval, 1000)
*/
const timer = setInterval(function () {
    console.log(mostraHora())
}, 1000)

setTimeout(function () { 
    clearInterval(timer)
}, 3000)

setTimeout(function () {
    console.log('Olá, Mundo!')
}, 4000)