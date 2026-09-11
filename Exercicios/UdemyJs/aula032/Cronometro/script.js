const timerhtml = document.querySelector('.timer')

const data = new Date()
let horas = data.toLocaleDateString()

function cronometro() {

    setInterval(function() {
    timerhtml.innerHTML = cronometro()
    }, 1000)
}