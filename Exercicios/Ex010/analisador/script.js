var num = document.getElementById('inum')
var lista = document.getElementById('flista')
var res = document.getElementById('res')
var valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number (n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado!`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor invalido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if(valores.length == 0) {
        alert('Adicione valores antes de finalizar!!!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior) {
                maior = valores[pos]
            } else if(valores[pos] < menor) {
                menor = valores[pos]
            }
        }

        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O menor número foi ${menor}</p>`
        res.innerHTML += `<p>O maior número foi ${maior}</p>`
        res.innerHTML += `<p>A soma de todos os números é igual a ${soma}</p>`
        res.innerHTML += `<p>A media entre os números é igual ${media}</p>`
    }
}