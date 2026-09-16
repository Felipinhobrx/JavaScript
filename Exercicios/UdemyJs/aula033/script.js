const addTarefa = document.querySelector('#tarefa')
let tarefa = document.querySelector('#itexto')
const lista = document.querySelector('#tarefas')

function criaLi() {
    let li = document.createElement('li')
    return li;
}

tarefa.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        criaTarefa(tarefa.value)
    }
})

function limpainput() {
    tarefa.value = ''
    tarefa.focus()
}

function criaBotaoApagar(li) {
    li += '  '
    const botao = document.createElement('button')
    botao.innerText = 'Apagar'
    botao.setAttribute('class', 'apagar')
    li.appendChild(botao)
}

function criaTarefa(tarefa) {
    const li = criaLi()
    li.innerText = tarefa
    lista.appendChild(li)
    limpainput()
    criaBotaoApagar(li)
}

addTarefa.addEventListener('click', function() {
    criaTarefa(tarefa.value)
})

document.addEventListener('click', function(e) {
    const el = e.target

    if (el.classList.contains('apagar')) {
        el.parentElement.remove()
    }
})