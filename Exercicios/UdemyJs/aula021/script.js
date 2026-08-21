const form = document.getElementById('formulario');

form.addEventListener('submit', function(evento) {
    evento.preventDefault()
    console.log('Evento prevenido')
    setResultado ('Olá, Mundo!')
})

function setResultado(msg) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = ''
    const p = document.createElement('p')
    
}